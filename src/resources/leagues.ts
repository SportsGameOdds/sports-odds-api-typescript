// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Leagues extends APIResource {
  /**
   * Get a list of Leagues
   */
  getLeagues(
    query: LeagueGetLeaguesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<LeagueGetLeaguesResponse> {
    return (
      this._client.get('/leagues/', { query, ...options }) as APIPromise<{ data: LeagueGetLeaguesResponse }>
    )._thenUnwrap((obj) => obj.data);
  }
}

export interface League {
  enabled?: boolean;

  leagueID?: string;

  name?: string;

  shortName?: string;

  sportID?: string;
}

export type LeagueGetLeaguesResponse = Array<League>;

export interface LeagueGetLeaguesParams {
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
  export {
    type League as League,
    type LeagueGetLeaguesResponse as LeagueGetLeaguesResponse,
    type LeagueGetLeaguesParams as LeagueGetLeaguesParams,
  };
}
