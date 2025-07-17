// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Players extends APIResource {
  /**
   * Get a list of Players for a specific Team or Event
   */
  list(
    query: PlayerListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PlayerListResponse> {
    return this._client.get('/players/', { query, ...options });
  }
}

export interface PlayerListResponse {
  data?: Array<PlayerListResponse.Data>;

  nextCursor?: string;

  success?: boolean;
}

export namespace PlayerListResponse {
  export interface Data {
    aliases?: Array<string>;

    jerseyNumber?: number;

    leagueID?: string;

    lookups?: Data.Lookups;

    names?: Data.Names;

    playerID?: string;

    playerTeams?: { [key: string]: Data.PlayerTeams };

    position?: string;

    sportID?: string;

    teamID?: string;
  }

  export namespace Data {
    export interface Lookups {
      anyName?: Array<string>;

      fullName?: Array<string>;

      initials?: Array<string>;
    }

    export interface Names {
      display?: string;

      firstName?: string;

      lastName?: string;
    }

    export interface PlayerTeams {
      teamID?: string;
    }
  }
}

export interface PlayerListParams {
  /**
   * The cursor for the request. Used to get the next group of Players. This should
   * be the nextCursor from the prior response.
   */
  cursor?: string;

  /**
   * EventID to get Players data for
   */
  eventID?: string;

  /**
   * The maximum number of Players to return
   */
  limit?: number;

  /**
   * PlayerID to get data for
   */
  playerID?: string;

  /**
   * TeamID to get Players data for
   */
  teamID?: string;
}

export declare namespace Players {
  export { type PlayerListResponse as PlayerListResponse, type PlayerListParams as PlayerListParams };
}
