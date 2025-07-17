// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AccountAPI from './account';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Account extends APIResource {
  /**
   * Get rate-limits and usage data about your API key
   */
  getUsage(options?: RequestOptions): APIPromise<AccountGetUsageResponse> {
    return this._client.get('/account/usage', options);
  }
}

export interface RateLimitInterval {
  /**
   * Current number of entities accessed in the interval
   */
  'current-entities'?: number;

  /**
   * Current number of requests made in the interval
   */
  'current-requests'?: number;

  /**
   * Maximum allowed entity accesses in the interval
   */
  'max-entities'?: 'unlimited' | number;

  /**
   * Maximum allowed requests in the interval
   */
  'max-requests'?: 'unlimited' | number;
}

export interface AccountGetUsageResponse {
  data?: AccountGetUsageResponse.Data;

  success?: boolean;
}

export namespace AccountGetUsageResponse {
  export interface Data {
    /**
     * The Stripe customer ID for the account
     */
    customerID?: string;

    /**
     * The email address associated with the account
     */
    email?: string;

    /**
     * Whether the API key is active
     */
    isActive?: boolean;

    /**
     * The hashed identifier for the API key
     */
    keyID?: string;

    rateLimits?: Data.RateLimits;

    /**
     * The current subscription tier
     */
    tier?: string;
  }

  export namespace Data {
    export interface RateLimits {
      'per-day'?: AccountAPI.RateLimitInterval;

      'per-hour'?: AccountAPI.RateLimitInterval;

      'per-minute'?: AccountAPI.RateLimitInterval;

      'per-month'?: AccountAPI.RateLimitInterval;

      'per-second'?: AccountAPI.RateLimitInterval;
    }
  }
}

export declare namespace Account {
  export {
    type RateLimitInterval as RateLimitInterval,
    type AccountGetUsageResponse as AccountGetUsageResponse,
  };
}
