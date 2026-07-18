// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { NextCursorPage, type NextCursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';

/**
 * Get metadata on supported Markets
 */
export class Markets extends APIResource {
  /**
   * Get a list of Markets
   */
  get(
    query: MarketGetParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<MarketsNextCursorPage, Market> {
    return this._client.getAPIList('/markets/', NextCursorPage<Market>, { query, ...options });
  }
}

export type MarketsNextCursorPage = NextCursorPage<Market>;

export interface Market {
  /**
   * The number of unique active events with available odds for this market across
   * all supported league and bookmaker combinations.
   */
  activeEvents?: number;

  /**
   * The type of bet
   */
  betTypeID?: string;

  /**
   * True if this is a sub-period of a main market
   */
  isMainDerivative?: boolean;

  /**
   * True if this is a main market
   */
  isMainMarket?: boolean;

  /**
   * True if this is a prop bet
   */
  isProp?: boolean;

  /**
   * True if this market is for a sub-period
   */
  isSubPeriod?: boolean;

  /**
   * True if this market is supported by at least one league/bookmaker.
   */
  isSupported?: boolean;

  /**
   * The unique identifier for the group (all sides of the market) this market
   * belongs to
   */
  marketGroupID?: string;

  /**
   * The primary display name for this market's group
   */
  marketGroupName?: string;

  /**
   * An alternative display name for this market's group
   */
  marketGroupNameAlias?: string;

  /**
   * Sport-specific market group names when they differ from the primary name
   */
  marketGroupNameBySport?: { [key: string]: string };

  /**
   * The unique identifier for this market
   */
  oddID?: string;

  /**
   * The period of the event this market applies to
   */
  periodID?: string;

  /**
   * Set to a player's unique playerID if it's a player prop
   */
  playerID?: string;

  /**
   * The type of prop bet
   */
  propType?: 'game_prop' | 'team_prop' | 'player_prop' | 'other_prop';

  /**
   * The side of the bet
   */
  sideID?: string;

  /**
   * The statEntityID represents whose performance on the stat is being evaluated
   */
  statEntityID?: string;

  /**
   * The statistic which is being evaluated as a part of this market
   */
  statID?: string;

  /**
   * Nested object showing which leagues and bookmakers support this market.
   */
  support?: { [key: string]: { [key: string]: Market.unnamed_schema_with_map_parent_0 } };

  /**
   * Set to team's unique teamID if it's a team prop for a tournament type event
   */
  teamID?: string;
}

export namespace Market {
  export interface unnamed_schema_with_map_parent_0 {
    /**
     * Whether this market is supported for the given league and bookmaker combination.
     */
    supported?: boolean;
  }
}

export interface MarketGetParams extends NextCursorPageParams {
  /**
   * A single betTypeID or comma-separated list of betTypeIDs to filter Markets by
   */
  betTypeID?: string;

  /**
   * A single bookmakerID or comma-separated list of bookmakerIDs to filter Markets
   * by
   */
  bookmakerID?: string;

  /**
   * Filter to only include main markets (main period moneyline, spread, and
   * over/under)
   */
  isMainMarket?: boolean;

  /**
   * Filter by whether it is any type of prop bet market
   */
  isProp?: boolean;

  /**
   * Filter by whether it tracks a sub/non-main period
   */
  isSubPeriod?: boolean;

  /**
   * Filter whether this market is fully supported by at least 1 bookmaker in at
   * least 1 league. Defaults to true if not specified.
   */
  isSupported?: boolean;

  /**
   * A single leagueID or comma-separated list of leagueIDs to filter Markets by
   */
  leagueID?: string;

  /**
   * A single oddID or comma-separated list of oddIDs. Used to specify specific
   * Markets to return.
   */
  oddID?: string;

  /**
   * A single periodID or comma-separated list of periodIDs to filter Markets by
   */
  periodID?: string;

  /**
   * Filter by prop type (game_prop, team_prop, player_prop, other_prop)
   */
  propType?: string;

  /**
   * A single sideID or comma-separated list of sideIDs to filter Markets by
   */
  sideID?: string;

  /**
   * A single sportID or comma-separated list of sportIDs to filter Markets by
   */
  sportID?: string;

  /**
   * A single statEntityID or comma-separated list of statEntityIDs to filter Markets
   * by
   */
  statEntityID?: string;

  /**
   * A single statID or comma-separated list of statIDs to filter Markets by
   */
  statID?: string;
}

export declare namespace Markets {
  export {
    type Market as Market,
    type MarketsNextCursorPage as MarketsNextCursorPage,
    type MarketGetParams as MarketGetParams,
  };
}
