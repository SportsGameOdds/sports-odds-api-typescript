// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Teams extends APIResource {
  /**
   * Get a list of Teams by ID or league
   */
  list(
    query: TeamListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TeamListResponse> {
    return this._client.get('/teams/', { query, ...options });
  }
}

export interface TeamListResponse {
  data?: Array<TeamListResponse.Data>;

  nextCursor?: string;

  success?: boolean;
}

export namespace TeamListResponse {
  export interface Data {
    colors?: Data.Colors;

    leagueID?: string;

    logo?: string;

    lookups?: Data.Lookups;

    names?: Data.Names;

    sportID?: string;

    standings?: Data.Standings;

    teamID?: string;
  }

  export namespace Data {
    export interface Colors {
      primary?: string;

      primaryContrast?: string;

      secondary?: string;

      secondaryContrast?: string;
    }

    export interface Lookups {
      teamName?: Array<string>;
    }

    export interface Names {
      long?: string;

      medium?: string;

      short?: string;
    }

    export interface Standings {
      losses?: number;

      played?: number;

      position?: string;

      record?: string;

      ties?: number;

      wins?: number;
    }
  }
}

export interface TeamListParams {
  /**
   * The cursor for the request. Used to get the next group of Teams. This should be
   * the nextCursor from the prior response.
   */
  cursor?: string;

  /**
   * A single leagueID or comma-separated list of leagueIDs to get Teams for
   */
  leagueID?: string;

  /**
   * The maximum number of Teams to return
   */
  limit?: number;

  /**
   * A single sportID or comma-separated list of sportIDs to get Teams for
   */
  sportID?: string;

  /**
   * A single teamID or comma-separated list of teamIDs to get data for
   */
  teamID?: string;
}

export declare namespace Teams {
  export { type TeamListResponse as TeamListResponse, type TeamListParams as TeamListParams };
}
