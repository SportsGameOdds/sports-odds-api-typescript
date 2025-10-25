// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { IncomingMessage } from 'node:http';
import { ClientOptions } from 'sports-odds-api';

export const parseAuthHeaders = (req: IncomingMessage): Partial<ClientOptions> => {
  const apiKeyHeader =
    Array.isArray(req.headers['x-api-key']) ? req.headers['x-api-key'][0] : req.headers['x-api-key'];
  const apiKeyParam =
    Array.isArray(req.headers['x-sports-odds-api-key-header']) ?
      req.headers['x-sports-odds-api-key-header'][0]
    : req.headers['x-sports-odds-api-key-header'];
  return { apiKeyHeader, apiKeyParam };
};
