// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AccountAPI from './account';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Account extends APIResource {
  /**
   * Get rate-limits and usage data about your API key
   */
  getUsage(options?: RequestOptions): APIPromise<AccountUsage> {
    return (this._client.get('/account/usage', options) as APIPromise<{ data: AccountUsage }>)._thenUnwrap(
      (obj) => obj.data,
    );
  }
}

export interface AccountUsage {
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

  rateLimits?: AccountUsage.RateLimits;

  /**
   * The current subscription tier
   */
  tier?: string;
}

export namespace AccountUsage {
  export interface RateLimits {
    'per-day'?: AccountAPI.RateLimitInterval;

    'per-hour'?: AccountAPI.RateLimitInterval;

    'per-minute'?: AccountAPI.RateLimitInterval;

    'per-month'?: AccountAPI.RateLimitInterval;

    'per-second'?: AccountAPI.RateLimitInterval;
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

export declare namespace Account {
  export { type AccountUsage as AccountUsage, type RateLimitInterval as RateLimitInterval };
}
