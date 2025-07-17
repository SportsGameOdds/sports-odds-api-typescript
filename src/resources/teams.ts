// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { NextCursorPage, type NextCursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';

export class Teams extends APIResource {
  /**
   * Get a list of Teams by ID or league
   */
  getTeams(
    query: TeamGetTeamsParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<TeamsNextCursorPage, Team> {
    return this._client.getAPIList('/teams/', NextCursorPage<Team>, { query, ...options });
  }
}

export type TeamsNextCursorPage = NextCursorPage<Team>;

export interface Team {
  colors?: Team.Colors;

  leagueID?: string;

  logo?: string;

  lookups?: Team.Lookups;

  names?: Team.Names;

  sportID?: string;

  standings?: Team.Standings;

  teamID?: string;
}

export namespace Team {
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

export interface TeamGetTeamsParams extends NextCursorPageParams {
  /**
   * A single leagueID or comma-separated list of leagueIDs to get Teams for
   */
  leagueID?: string;

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
  export {
    type Team as Team,
    type TeamsNextCursorPage as TeamsNextCursorPage,
    type TeamGetTeamsParams as TeamGetTeamsParams,
  };
}
