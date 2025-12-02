// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'sports-odds-api-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'sports-odds-api-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import SportsGameOdds from 'sports-odds-api';

export const metadata: Metadata = {
  resource: 'account',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/account/usage',
  operationId: 'getUsageData',
};

export const tool: Tool = {
  name: 'get_usage_account',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet rate-limits and usage data about your API key\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/account_usage',\n  $defs: {\n    account_usage: {\n      type: 'object',\n      properties: {\n        customerID: {\n          type: 'string',\n          description: 'The Stripe customer ID for the account'\n        },\n        email: {\n          type: 'string',\n          description: 'The email address associated with the account'\n        },\n        isActive: {\n          type: 'boolean',\n          description: 'Whether the API key is active'\n        },\n        keyID: {\n          type: 'string',\n          description: 'The hashed identifier for the API key'\n        },\n        rateLimits: {\n          type: 'object',\n          properties: {\n            'per-day': {\n              $ref: '#/$defs/rate_limit_interval'\n            },\n            'per-hour': {\n              $ref: '#/$defs/rate_limit_interval'\n            },\n            'per-minute': {\n              $ref: '#/$defs/rate_limit_interval'\n            },\n            'per-month': {\n              $ref: '#/$defs/rate_limit_interval'\n            },\n            'per-second': {\n              $ref: '#/$defs/rate_limit_interval'\n            }\n          }\n        },\n        tier: {\n          type: 'string',\n          description: 'The current subscription tier'\n        }\n      }\n    },\n    rate_limit_interval: {\n      type: 'object',\n      properties: {\n        'current-entities': {\n          type: 'integer',\n          description: 'Current number of entities accessed in the interval'\n        },\n        'current-requests': {\n          type: 'integer',\n          description: 'Current number of requests made in the interval'\n        },\n        'max-entities': {\n          anyOf: [            {\n              type: 'string',\n              enum: [                'unlimited'\n              ]\n            },\n            {\n              type: 'integer'\n            }\n          ],\n          description: 'Maximum allowed entity accesses in the interval'\n        },\n        'max-requests': {\n          anyOf: [            {\n              type: 'string',\n              enum: [                'unlimited'\n              ]\n            },\n            {\n              type: 'integer'\n            }\n          ],\n          description: 'Maximum allowed requests in the interval'\n        }\n      }\n    }\n  }\n}\n```",
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
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.account.getUsage()));
  } catch (error) {
    if (error instanceof SportsGameOdds.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
