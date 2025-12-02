// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'sports-odds-api-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'sports-odds-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import SportsGameOdds from 'sports-odds-api';

export const metadata: Metadata = {
  resource: 'teams',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/teams/',
  operationId: 'getTeamIDs',
};

export const tool: Tool = {
  name: 'get_teams',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet a list of Teams by ID or league\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/team'\n      }\n    },\n    nextCursor: {\n      type: 'string'\n    },\n    success: {\n      type: 'boolean'\n    }\n  },\n  $defs: {\n    team: {\n      type: 'object',\n      properties: {\n        colors: {\n          type: 'object',\n          properties: {\n            primary: {\n              type: 'string'\n            },\n            primaryContrast: {\n              type: 'string'\n            },\n            secondary: {\n              type: 'string'\n            },\n            secondaryContrast: {\n              type: 'string'\n            }\n          }\n        },\n        leagueID: {\n          type: 'string'\n        },\n        logo: {\n          type: 'string'\n        },\n        lookups: {\n          type: 'object',\n          properties: {\n            teamName: {\n              type: 'array',\n              items: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        names: {\n          type: 'object',\n          properties: {\n            long: {\n              type: 'string'\n            },\n            medium: {\n              type: 'string'\n            },\n            short: {\n              type: 'string'\n            }\n          }\n        },\n        sportID: {\n          type: 'string'\n        },\n        standings: {\n          type: 'object',\n          properties: {\n            losses: {\n              type: 'number'\n            },\n            played: {\n              type: 'number'\n            },\n            position: {\n              type: 'string'\n            },\n            record: {\n              type: 'string'\n            },\n            ties: {\n              type: 'number'\n            },\n            wins: {\n              type: 'number'\n            }\n          }\n        },\n        teamID: {\n          type: 'string'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      cursor: {
        type: 'string',
        description:
          'The cursor for the request. Used to get the next group of Teams. This should be the nextCursor from the prior response.',
      },
      leagueID: {
        type: 'string',
        description: 'A single leagueID or comma-separated list of leagueIDs to get Teams for',
      },
      limit: {
        type: 'number',
        description: 'The maximum number of Teams to return',
      },
      sportID: {
        type: 'string',
        description: 'A single sportID or comma-separated list of sportIDs to get Teams for',
      },
      teamID: {
        type: 'string',
        description: 'A single teamID or comma-separated list of teamIDs to get data for',
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
  const response = await client.teams.get(body).asResponse();
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await response.json()));
  } catch (error) {
    if (error instanceof SportsGameOdds.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
