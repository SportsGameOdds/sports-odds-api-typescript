// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'sports-odds-api-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'sports-odds-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import SportsGameOdds from 'sports-odds-api';

export const metadata: Metadata = {
  resource: 'stats',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/stats/',
  operationId: 'getStatIDs',
};

export const tool: Tool = {
  name: 'get_stats',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet a list of StatIDs\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/stat_get_response',\n  $defs: {\n    stat_get_response: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/stat'\n      }\n    },\n    stat: {\n      type: 'object',\n      properties: {\n        description: {\n          type: 'string'\n        },\n        displays: {\n          type: 'object',\n          properties: {\n            long: {\n              type: 'string'\n            },\n            short: {\n              type: 'string'\n            }\n          }\n        },\n        isScoreStat: {\n          type: 'boolean'\n        },\n        statID: {\n          type: 'string'\n        },\n        supportedLevels: {\n          type: 'object',\n          properties: {\n            all: {\n              type: 'boolean'\n            },\n            player: {\n              type: 'boolean'\n            },\n            team: {\n              type: 'boolean'\n            }\n          }\n        },\n        supportedSports: {\n          type: 'object',\n          additionalProperties: true\n        },\n        units: {\n          type: 'object',\n          properties: {\n            long: {\n              type: 'object',\n              properties: {\n                plural: {\n                  type: 'string'\n                },\n                singular: {\n                  type: 'string'\n                }\n              }\n            },\n            short: {\n              type: 'object',\n              properties: {\n                plural: {\n                  type: 'string'\n                },\n                singular: {\n                  type: 'string'\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      sportID: {
        type: 'string',
        description: 'SportID to get StatIDs for',
      },
      statID: {
        type: 'string',
        description: 'StatID to get data for',
      },
      statLevel: {
        type: 'string',
        description:
          'Level of the stat, must be used in combination with sportID. Must be one of all, player, or team. Shows stats that are applicable to that specified entity, defaults to all.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: SportsGameOdds, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.stats.get(body)));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
