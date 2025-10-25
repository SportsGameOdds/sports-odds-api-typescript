// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'sports-odds-api-mcp/filtering';
import { Metadata, asTextContentResult } from 'sports-odds-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import SportsGameOdds from 'sports-odds-api';

export const metadata: Metadata = {
  resource: 'leagues',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/leagues/',
  operationId: 'getLeagues',
};

export const tool: Tool = {
  name: 'get_leagues',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet a list of Leagues\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/league_get_response',\n  $defs: {\n    league_get_response: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/league'\n      }\n    },\n    league: {\n      type: 'object',\n      properties: {\n        enabled: {\n          type: 'boolean'\n        },\n        leagueID: {\n          type: 'string'\n        },\n        name: {\n          type: 'string'\n        },\n        shortName: {\n          type: 'string'\n        },\n        sportID: {\n          type: 'string'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      leagueID: {
        type: 'string',
        description: 'The league to get data for',
      },
      sportID: {
        type: 'string',
        description: 'The sport to get leagues for',
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
  return asTextContentResult(await maybeFilter(jq_filter, await client.leagues.get(body)));
};

export default { metadata, tool, handler };
