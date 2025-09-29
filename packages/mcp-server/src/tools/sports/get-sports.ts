// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'sports-odds-api-mcp/filtering';
import { Metadata, asTextContentResult } from 'sports-odds-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import SportsGameOdds from 'sports-odds-api';

export const metadata: Metadata = {
  resource: 'sports',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/sports/',
  operationId: 'getSports',
};

export const tool: Tool = {
  name: 'get_sports',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet a list of sports\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/sport'\n      }\n    }\n  },\n  $defs: {\n    sport: {\n      type: 'object',\n      properties: {\n        backgroundImage: {\n          type: 'string'\n        },\n        basePeriods: {\n          type: 'array',\n          items: {\n            type: 'string'\n          }\n        },\n        clockType: {\n          type: 'string'\n        },\n        defaultPopularityScore: {\n          type: 'number'\n        },\n        enabled: {\n          type: 'boolean'\n        },\n        eventWord: {\n          type: 'object',\n          properties: {\n            long: {\n              type: 'object',\n              properties: {\n                plural: {\n                  type: 'string'\n                },\n                singular: {\n                  type: 'string'\n                }\n              }\n            },\n            short: {\n              type: 'object',\n              properties: {\n                plural: {\n                  type: 'string'\n                },\n                singular: {\n                  type: 'string'\n                }\n              }\n            }\n          }\n        },\n        extraPeriods: {\n          type: 'array',\n          items: {\n            type: 'string'\n          }\n        },\n        hasMeaningfulHomeAway: {\n          type: 'boolean'\n        },\n        imageIcon: {\n          type: 'string'\n        },\n        name: {\n          type: 'string'\n        },\n        pointWord: {\n          type: 'object',\n          properties: {\n            long: {\n              type: 'object',\n              properties: {\n                plural: {\n                  type: 'string'\n                },\n                singular: {\n                  type: 'string'\n                }\n              }\n            },\n            short: {\n              type: 'object',\n              properties: {\n                plural: {\n                  type: 'string'\n                },\n                singular: {\n                  type: 'string'\n                }\n              }\n            }\n          }\n        },\n        shortName: {\n          type: 'string'\n        },\n        sportID: {\n          type: 'string'\n        },\n        squareImage: {\n          type: 'string'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
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
  const { jq_filter } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.sports.get()));
};

export default { metadata, tool, handler };
