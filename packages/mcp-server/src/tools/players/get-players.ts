// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'sports-odds-api-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'sports-odds-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import SportsGameOdds from 'sports-odds-api';

export const metadata: Metadata = {
  resource: 'players',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/players/',
  operationId: 'getPlayers',
};

export const tool: Tool = {
  name: 'get_players',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet a list of Players for a specific Team or Event\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/player'\n      }\n    },\n    nextCursor: {\n      type: 'string'\n    },\n    success: {\n      type: 'boolean'\n    }\n  },\n  $defs: {\n    player: {\n      type: 'object',\n      properties: {\n        aliases: {\n          type: 'array',\n          items: {\n            type: 'string'\n          }\n        },\n        jerseyNumber: {\n          type: 'number'\n        },\n        leagueID: {\n          type: 'string'\n        },\n        lookups: {\n          type: 'object',\n          properties: {\n            anyName: {\n              type: 'array',\n              items: {\n                type: 'string'\n              }\n            },\n            fullName: {\n              type: 'array',\n              items: {\n                type: 'string'\n              }\n            },\n            initials: {\n              type: 'array',\n              items: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        names: {\n          type: 'object',\n          properties: {\n            display: {\n              type: 'string'\n            },\n            firstName: {\n              type: 'string'\n            },\n            lastName: {\n              type: 'string'\n            }\n          }\n        },\n        playerID: {\n          type: 'string'\n        },\n        playerTeams: {\n          type: 'object',\n          additionalProperties: true\n        },\n        position: {\n          type: 'string'\n        },\n        sportID: {\n          type: 'string'\n        },\n        teamID: {\n          type: 'string'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      cursor: {
        type: 'string',
        description:
          'The cursor for the request. Used to get the next group of Players. This should be the nextCursor from the prior response.',
      },
      eventID: {
        type: 'string',
        description: 'EventID to get Players data for',
      },
      limit: {
        type: 'number',
        description: 'The maximum number of Players to return',
      },
      playerID: {
        type: 'string',
        description: 'PlayerID to get data for',
      },
      teamID: {
        type: 'string',
        description: 'TeamID to get Players data for',
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
  const response = await client.players.get(body).asResponse();
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await response.json()));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
