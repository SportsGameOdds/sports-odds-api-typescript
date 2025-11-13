// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'sports-odds-api-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'sports-odds-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import SportsGameOdds from 'sports-odds-api';

export const metadata: Metadata = {
  resource: 'events',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/events/',
  operationId: 'getEvents',
};

export const tool: Tool = {
  name: 'get_events',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet a list of Events\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/event'\n      }\n    },\n    nextCursor: {\n      type: 'string'\n    },\n    success: {\n      type: 'boolean'\n    }\n  },\n  $defs: {\n    event: {\n      type: 'object',\n      properties: {\n        activity: {\n          type: 'object',\n          properties: {\n            count: {\n              type: 'number'\n            },\n            score: {\n              type: 'number'\n            }\n          }\n        },\n        eventID: {\n          type: 'string'\n        },\n        info: {\n          type: 'object',\n          properties: {\n            seasonWeek: {\n              type: 'string'\n            }\n          }\n        },\n        leagueID: {\n          type: 'string'\n        },\n        manual: {\n          type: 'boolean'\n        },\n        odds: {\n          type: 'object',\n          additionalProperties: true\n        },\n        players: {\n          type: 'object',\n          additionalProperties: true\n        },\n        results: {\n          type: 'object',\n          additionalProperties: true\n        },\n        sportID: {\n          type: 'string'\n        },\n        status: {\n          type: 'object',\n          properties: {\n            cancelled: {\n              type: 'boolean'\n            },\n            completed: {\n              type: 'boolean'\n            },\n            currentPeriodID: {\n              type: 'string'\n            },\n            delayed: {\n              type: 'boolean'\n            },\n            displayLong: {\n              type: 'string'\n            },\n            displayShort: {\n              type: 'string'\n            },\n            ended: {\n              type: 'boolean'\n            },\n            finalized: {\n              type: 'boolean'\n            },\n            hardStart: {\n              type: 'boolean'\n            },\n            live: {\n              type: 'boolean'\n            },\n            oddsAvailable: {\n              type: 'boolean'\n            },\n            oddsPresent: {\n              type: 'boolean'\n            },\n            periods: {\n              type: 'object',\n              properties: {\n                ended: {\n                  type: 'array',\n                  items: {\n                    type: 'string'\n                  }\n                },\n                started: {\n                  type: 'array',\n                  items: {\n                    type: 'string'\n                  }\n                }\n              }\n            },\n            previousPeriodID: {\n              type: 'string'\n            },\n            reGrade: {\n              type: 'boolean'\n            },\n            started: {\n              type: 'boolean'\n            },\n            startsAt: {\n              type: 'string',\n              format: 'date-time'\n            }\n          }\n        },\n        teams: {\n          type: 'object',\n          properties: {\n            away: {\n              type: 'object',\n              properties: {\n                colors: {\n                  type: 'object',\n                  properties: {\n                    primary: {\n                      type: 'string'\n                    },\n                    primaryContrast: {\n                      type: 'string'\n                    },\n                    secondary: {\n                      type: 'string'\n                    },\n                    secondaryContrast: {\n                      type: 'string'\n                    }\n                  }\n                },\n                logo: {\n                  type: 'string'\n                },\n                names: {\n                  type: 'object',\n                  properties: {\n                    long: {\n                      type: 'string'\n                    },\n                    medium: {\n                      type: 'string'\n                    },\n                    short: {\n                      type: 'string'\n                    }\n                  }\n                },\n                score: {\n                  type: 'number'\n                },\n                statEntityID: {\n                  type: 'string'\n                },\n                teamID: {\n                  type: 'string'\n                }\n              }\n            },\n            home: {\n              type: 'object',\n              properties: {\n                colors: {\n                  type: 'object',\n                  properties: {\n                    primary: {\n                      type: 'string'\n                    },\n                    primaryContrast: {\n                      type: 'string'\n                    },\n                    secondary: {\n                      type: 'string'\n                    },\n                    secondaryContrast: {\n                      type: 'string'\n                    }\n                  }\n                },\n                logo: {\n                  type: 'string'\n                },\n                names: {\n                  type: 'object',\n                  properties: {\n                    long: {\n                      type: 'string'\n                    },\n                    medium: {\n                      type: 'string'\n                    },\n                    short: {\n                      type: 'string'\n                    }\n                  }\n                },\n                score: {\n                  type: 'number'\n                },\n                statEntityID: {\n                  type: 'string'\n                },\n                teamID: {\n                  type: 'string'\n                }\n              }\n            }\n          }\n        },\n        type: {\n          type: 'string'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      bookmakerID: {
        type: 'string',
        description: 'A bookmakerID or comma-separated list of bookmakerIDs to include odds for',
      },
      cancelled: {
        type: 'boolean',
        description:
          'Only include cancelled Events (true), only non-cancelled Events (false) or all Events (omit)',
      },
      cursor: {
        type: 'string',
        description:
          'The cursor for the request. Used to get the next group of Events. This should be the nextCursor from the prior response.',
      },
      ended: {
        type: 'boolean',
        description:
          'Only include Events which have have ended (true), only Events which have not ended (false) or all Events (omit)',
      },
      eventID: {
        type: 'string',
        description: 'An eventID to get Event data for',
      },
      eventIDs: {
        type: 'string',
        description: 'A comma separated list of eventIDs to get Event data for',
      },
      finalized: {
        type: 'boolean',
        description:
          'Only include finalized Events (true), exclude unfinalized Events (false) or all Events (omit)',
      },
      includeAltLines: {
        type: 'boolean',
        description: 'Whether to include alternate lines in the odds byBookmaker data',
      },
      includeOpposingOdds: {
        type: 'boolean',
        description: 'Whether to include opposing odds for each included oddID',
      },
      leagueID: {
        type: 'string',
        description: 'A leagueID or comma-separated list of leagueIDs to get Events for',
      },
      limit: {
        type: 'number',
        description: 'The maximum number of Events to return',
      },
      live: {
        type: 'boolean',
        description: 'Only include live Events (true), only non-live Events (false) or all Events (omit)',
      },
      oddID: {
        type: 'string',
        description: 'An oddID or comma-separated list of oddIDs to include odds for',
      },
      oddsAvailable: {
        type: 'boolean',
        description:
          'Whether you want only Events which do (true) or do not (false) have odds markets which are currently available (open for wagering)',
      },
      oddsPresent: {
        type: 'boolean',
        description:
          'Whether you want only Events which do (true) or do not (false) have any associated odds markets regardless of whether those odds markets are currently available (open for wagering)',
      },
      playerID: {
        type: 'string',
        description:
          'A playerID or comma-separated list of playerIDs to include Events (and associated odds) for',
      },
      sportID: {
        type: 'string',
        description: 'A sportID or comma-separated list of sportIDs to get Events for',
      },
      started: {
        type: 'boolean',
        description:
          'Only include Events which have have previously started (true), only Events which have not previously started (false) or all Events (omit)',
      },
      startsAfter: {
        type: 'string',
        description: 'Get Events that start after this date',
        format: 'date-time',
      },
      startsBefore: {
        type: 'string',
        description: 'Get Events that start before this date',
        format: 'date-time',
      },
      teamID: {
        type: 'string',
        description: 'A teamID or comma-separated list of teamIDs to include Events for',
      },
      type: {
        type: 'string',
        description: 'Only include Events of the specified type',
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
  const response = await client.events.get(body).asResponse();
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
