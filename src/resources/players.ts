// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { NextCursorPage, type NextCursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';

export class Players extends APIResource {
  /**
   * Get a list of Players for a specific Team or Event
   */
  getPlayers(
    query: PlayerGetPlayersParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<PlayersNextCursorPage, Player> {
    return this._client.getAPIList('/players/', NextCursorPage<Player>, { query, ...options });
  }
}

export type PlayersNextCursorPage = NextCursorPage<Player>;

export interface Player {
  aliases?: Array<string>;

  jerseyNumber?: number;

  leagueID?: string;

  lookups?: Player.Lookups;

  names?: Player.Names;

  playerID?: string;

  playerTeams?: { [key: string]: Player.PlayerTeams };

  position?: string;

  sportID?: string;

  teamID?: string;
}

export namespace Player {
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

export interface PlayerGetPlayersParams extends NextCursorPageParams {
  /**
   * EventID to get Players data for
   */
  eventID?: string;

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
  export {
    type Player as Player,
    type PlayersNextCursorPage as PlayersNextCursorPage,
    type PlayerGetPlayersParams as PlayerGetPlayersParams,
  };
}
