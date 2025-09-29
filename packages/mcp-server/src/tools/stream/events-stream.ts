// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'sports-odds-api-mcp/filtering';
import { Metadata, asTextContentResult } from 'sports-odds-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import SportsGameOdds from 'sports-odds-api';

export const metadata: Metadata = {
  resource: 'stream',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/stream/events',
  operationId: 'streamEvents',
};

export const tool: Tool = {
  name: 'events_stream',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nSetup streamed (WebSocket) connection\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    channel: {\n      type: 'string'\n    },\n    data: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/event'\n      }\n    },\n    pusherKey: {\n      type: 'string'\n    },\n    pusherOptions: {\n      type: 'object',\n      properties: {\n        channelAuthorization: {\n          type: 'object',\n          properties: {\n            endpoint: {\n              type: 'string'\n            },\n            headers: {\n              type: 'object',\n              additionalProperties: true\n            }\n          }\n        },\n        cluster: {\n          type: 'string'\n        },\n        httpHost: {\n          type: 'string'\n        },\n        httpPort: {\n          type: 'integer'\n        },\n        httpsPort: {\n          type: 'integer'\n        },\n        wsHost: {\n          type: 'string'\n        },\n        wsPort: {\n          type: 'integer'\n        },\n        wssPort: {\n          type: 'integer'\n        }\n      }\n    },\n    success: {\n      type: 'boolean'\n    },\n    user: {\n      type: 'string'\n    }\n  },\n  $defs: {\n    event: {\n      type: 'object',\n      properties: {\n        activity: {\n          type: 'object',\n          properties: {\n            count: {\n              type: 'number'\n            },\n            score: {\n              type: 'number'\n            }\n          }\n        },\n        eventID: {\n          type: 'string'\n        },\n        info: {\n          type: 'object',\n          properties: {\n            seasonWeek: {\n              type: 'string'\n            }\n          }\n        },\n        leagueID: {\n          type: 'string'\n        },\n        manual: {\n          type: 'boolean'\n        },\n        odds: {\n          type: 'object',\n          additionalProperties: true\n        },\n        players: {\n          type: 'object',\n          additionalProperties: true\n        },\n        results: {\n          type: 'object',\n          description: 'Nested results in the format `<periodID>.<statEntityID>.<statID> → number`.',\n          additionalProperties: true\n        },\n        sportID: {\n          type: 'string'\n        },\n        status: {\n          type: 'object',\n          properties: {\n            cancelled: {\n              type: 'boolean'\n            },\n            completed: {\n              type: 'boolean'\n            },\n            currentPeriodID: {\n              type: 'string'\n            },\n            delayed: {\n              type: 'boolean'\n            },\n            displayLong: {\n              type: 'string'\n            },\n            displayShort: {\n              type: 'string'\n            },\n            ended: {\n              type: 'boolean'\n            },\n            finalized: {\n              type: 'boolean'\n            },\n            hardStart: {\n              type: 'boolean'\n            },\n            live: {\n              type: 'boolean'\n            },\n            oddsAvailable: {\n              type: 'boolean'\n            },\n            oddsPresent: {\n              type: 'boolean'\n            },\n            periods: {\n              type: 'object',\n              properties: {\n                ended: {\n                  type: 'array',\n                  items: {\n                    type: 'string'\n                  }\n                },\n                started: {\n                  type: 'array',\n                  items: {\n                    type: 'string'\n                  }\n                }\n              }\n            },\n            previousPeriodID: {\n              type: 'string'\n            },\n            reGrade: {\n              type: 'boolean'\n            },\n            started: {\n              type: 'boolean'\n            },\n            startsAt: {\n              type: 'string',\n              format: 'date-time'\n            }\n          }\n        },\n        teams: {\n          type: 'object',\n          properties: {\n            away: {\n              type: 'object',\n              properties: {\n                colors: {\n                  type: 'object',\n                  properties: {\n                    primary: {\n                      type: 'string'\n                    },\n                    primaryContrast: {\n                      type: 'string'\n                    },\n                    secondary: {\n                      type: 'string'\n                    },\n                    secondaryContrast: {\n                      type: 'string'\n                    }\n                  }\n                },\n                logo: {\n                  type: 'string'\n                },\n                names: {\n                  type: 'object',\n                  properties: {\n                    long: {\n                      type: 'string'\n                    },\n                    medium: {\n                      type: 'string'\n                    },\n                    short: {\n                      type: 'string'\n                    }\n                  }\n                },\n                score: {\n                  type: 'number'\n                },\n                statEntityID: {\n                  type: 'string'\n                },\n                teamID: {\n                  type: 'string'\n                }\n              }\n            },\n            home: {\n              type: 'object',\n              properties: {\n                colors: {\n                  type: 'object',\n                  properties: {\n                    primary: {\n                      type: 'string'\n                    },\n                    primaryContrast: {\n                      type: 'string'\n                    },\n                    secondary: {\n                      type: 'string'\n                    },\n                    secondaryContrast: {\n                      type: 'string'\n                    }\n                  }\n                },\n                logo: {\n                  type: 'string'\n                },\n                names: {\n                  type: 'object',\n                  properties: {\n                    long: {\n                      type: 'string'\n                    },\n                    medium: {\n                      type: 'string'\n                    },\n                    short: {\n                      type: 'string'\n                    }\n                  }\n                },\n                score: {\n                  type: 'number'\n                },\n                statEntityID: {\n                  type: 'string'\n                },\n                teamID: {\n                  type: 'string'\n                }\n              }\n            }\n          }\n        },\n        type: {\n          type: 'string'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      eventID: {
        type: 'string',
        description: 'An eventID to stream events for',
      },
      feed: {
        type: 'string',
        description: 'The feed you would like to subscribe to',
      },
      leagueID: {
        type: 'string',
        description: 'A leagueID to stream events for',
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
  return asTextContentResult(await maybeFilter(jq_filter, await client.stream.events(body)));
};

export default { metadata, tool, handler };
