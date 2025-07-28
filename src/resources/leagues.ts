// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Leagues extends APIResource {
  /**
   * Get a list of Leagues
   */
  get(
    query: LeagueGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<LeagueGetResponse> {
    return (
      this._client.get('/leagues/', { query, ...options }) as APIPromise<{ data: LeagueGetResponse }>
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

export type LeagueGetResponse = Array<League>;

export interface LeagueGetParams {
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
    type LeagueGetResponse as LeagueGetResponse,
    type LeagueGetParams as LeagueGetParams,
  };
}
