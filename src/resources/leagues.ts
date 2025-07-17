// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Leagues extends APIResource {
  /**
   * Get a list of Leagues
   */
  list(
    query: LeagueListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<LeagueListResponse> {
    return this._client.get('/leagues/', { query, ...options });
  }
}

export interface LeagueListResponse {
  data?: Array<LeagueListResponse.Data>;
}

export namespace LeagueListResponse {
  export interface Data {
    enabled?: boolean;

    leagueID?: string;

    name?: string;

    shortName?: string;

    sportID?: string;
  }
}

export interface LeagueListParams {
  /**
   * The league to get data for
   */
  leagueID?: string;

  /**
   * The sport to get leagues for
   */
  sportID?: string;
}

export declare namespace Leagues {
  export { type LeagueListResponse as LeagueListResponse, type LeagueListParams as LeagueListParams };
}
