const NOTION_VERSION = "2022-06-28";

type NotionConfig = {
  apiKey: string;
  databaseId: string;
  propName: string;
  propTags: string;
  propCampaign: string;
};

type SkillNotionMeta = {
  name: string;
  tag: string;
  campaign: string;
  downloadUrl: string;
  releaseUrl: string;
  skillTitle: string;
};

async function notionFetch(
  config: NotionConfig,
  path: string,
  init: RequestInit = {},
): Promise<Response> {
  const res = await fetch(`https://api.notion.com/v1${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${config.apiKey}`,
      "Notion-Version": NOTION_VERSION,
      "Content-Type": "application/json",
      ...(init.headers ?? {}),
    },
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Notion API ${path} failed (${res.status}): ${body}`);
  }

  return res;
}

export async function findSkillPage(
  config: NotionConfig,
  name: string,
): Promise<string | null> {
  const res = await notionFetch(config, `/databases/${config.databaseId}/query`, {
    method: "POST",
    body: JSON.stringify({
      filter: {
        property: config.propName,
        title: { equals: name },
      },
    }),
  });

  const data = (await res.json()) as { results: Array<{ id: string }> };
  return data.results[0]?.id ?? null;
}

function pageProperties(meta: SkillNotionMeta, config: NotionConfig) {
  return {
    [config.propName]: {
      title: [{ text: { content: meta.name } }],
    },
    [config.propTags]: {
      multi_select: [{ name: meta.tag }],
    },
    [config.propCampaign]: {
      select: { name: meta.campaign },
    },
  };
}

function pageBlocks(meta: SkillNotionMeta) {
  return [
    {
      object: "block",
      type: "heading_2",
      heading_2: {
        rich_text: [{ type: "text", text: { content: "Download" } }],
      },
    },
    {
      object: "block",
      type: "paragraph",
      paragraph: {
        rich_text: [
          {
            type: "text",
            text: {
              content: "Download the skill file",
              link: { url: meta.downloadUrl },
            },
          },
        ],
      },
    },
    {
      object: "block",
      type: "paragraph",
      paragraph: {
        rich_text: [
          { type: "text", text: { content: "Release page: " } },
          {
            type: "text",
            text: {
              content: meta.releaseUrl,
              link: { url: meta.releaseUrl },
            },
          },
        ],
      },
    },
    {
      object: "block",
      type: "heading_2",
      heading_2: {
        rich_text: [{ type: "text", text: { content: "Install" } }],
      },
    },
    {
      object: "block",
      type: "numbered_list_item",
      numbered_list_item: {
        rich_text: [
          {
            type: "text",
            text: { content: "Download the SKILL.md file using the link above." },
          },
        ],
      },
    },
    {
      object: "block",
      type: "numbered_list_item",
      numbered_list_item: {
        rich_text: [
          {
            type: "text",
            text: {
              content:
                "Add it to your Claude skills folder (Settings → Capabilities → Skills, or your project's .claude/skills directory).",
            },
          },
        ],
      },
    },
    {
      object: "block",
      type: "numbered_list_item",
      numbered_list_item: {
        rich_text: [
          {
            type: "text",
            text: {
              content: `Open Claude and ask it to run the ${meta.skillTitle} skill.`,
            },
          },
        ],
      },
    },
  ];
}

export async function createSkillPage(
  config: NotionConfig,
  meta: SkillNotionMeta,
): Promise<string> {
  const res = await notionFetch(config, "/pages", {
    method: "POST",
    body: JSON.stringify({
      parent: { database_id: config.databaseId },
      properties: pageProperties(meta, config),
      children: pageBlocks(meta),
    }),
  });

  const data = (await res.json()) as { id: string; url?: string };
  return data.url ?? data.id;
}

export async function updateSkillPage(
  config: NotionConfig,
  pageId: string,
  meta: SkillNotionMeta,
): Promise<string> {
  await notionFetch(config, `/pages/${pageId}`, {
    method: "PATCH",
    body: JSON.stringify({
      properties: pageProperties(meta, config),
    }),
  });

  await notionFetch(config, `/blocks/${pageId}/children`, {
    method: "PATCH",
    body: JSON.stringify({
      children: [
        {
          object: "block",
          type: "divider",
          divider: {},
        },
        ...pageBlocks(meta),
      ],
    }),
  });

  const res = await notionFetch(config, `/pages/${pageId}`);
  const data = (await res.json()) as { url?: string; id: string };
  return data.url ?? data.id;
}

export async function upsertSkillPage(
  config: NotionConfig,
  meta: SkillNotionMeta,
): Promise<{ pageUrl: string; created: boolean }> {
  const existingId = await findSkillPage(config, meta.name);

  if (existingId) {
    const pageUrl = await updateSkillPage(config, existingId, meta);
    return { pageUrl, created: false };
  }

  const pageUrl = await createSkillPage(config, meta);
  return { pageUrl, created: true };
}

export function loadNotionConfig(): NotionConfig | null {
  const apiKey = process.env.NOTION_API_KEY;
  const databaseId = process.env.NOTION_SKILLS_DB_ID;

  if (!apiKey || !databaseId) {
    return null;
  }

  return {
    apiKey,
    databaseId,
    propName: process.env.NOTION_PROP_NAME ?? "Name",
    propTags: process.env.NOTION_PROP_TAGS ?? "Tags",
    propCampaign: process.env.NOTION_PROP_CAMPAIGN ?? "Campaign",
  };
}
