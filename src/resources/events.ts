// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { NextCursorPage, type NextCursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';

/**
 * Get info about Events (includes odds, results, teams, and other metadata)
 */
export class Events extends APIResource {
  /**
   * Get a list of Events
   */
  get(
    query: EventGetParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<EventsNextCursorPage, Event> {
    return this._client.getAPIList('/events/', NextCursorPage<Event>, { query, ...options });
  }
}

export type EventsNextCursorPage = NextCursorPage<Event>;

export interface Event {
  activity?: Event.Activity;

  eventID?: string;

  info?: Event.Info;

  leagueID?: string;

  manual?: boolean;

  odds?: { [key: string]: Event.Odds };

  players?: { [key: string]: Event.Players };

  /**
   * Nested results in the format `{periodID}.{statEntityID}.{statID} → number`.
   */
  results?: { [key: string]: { [key: string]: { [key: string]: number } } };

  sportID?: string;

  status?: Event.Status;

  teams?: Event.Teams;

  type?: string;
}

export namespace Event {
  export interface Activity {
    count?: number;

    score?: number;
  }

  export interface Info {
    broadcasts?: Array<Info.Broadcast>;

    referee?: Info.Referee;

    seasonWeek?: string;

    venue?: Info.Venue;
  }

  export namespace Info {
    export interface Broadcast {
      broadcasterID?: string;

      name?: string;

      type?: 'tv' | 'webstream' | 'subscription' | 'sportsbook';
    }

    export interface Referee {
      name?: string;
    }

    export interface Venue {
      address?: string;

      capacity?: number;

      city?: string;

      countryCode?: string;

      countryName?: string;

      name?: string;

      regionCode?: string;

      regionName?: string;
    }
  }

  export interface Odds {
    betTypeID?: string;

    bookOdds?: string;

    bookOddsAvailable?: boolean;

    bookOverUnder?: string;

    bookSpread?: string;

    byBookmaker?: { [key: string]: Odds.ByBookmaker };

    cancelled?: boolean;

    ended?: boolean;

    fairOdds?: string;

    fairOddsAvailable?: boolean;

    fairOverUnder?: string;

    fairSpread?: string;

    marketName?: string;

    oddID?: string;

    opposingOddID?: string;

    periodID?: string;

    playerID?: string;

    score?: number;

    scoringSupported?: boolean;

    sideID?: string;

    started?: boolean;

    statEntityID?: string;

    statID?: string;
  }

  export namespace Odds {
    export interface ByBookmaker {
      available?: boolean;

      bookmakerID?: string;

      closeOdds?: string;

      closeOverUnder?: string;

      closeSpread?: string;

      isMainLine?: boolean;

      lastUpdatedAt?: string;

      odds?: string;

      openOdds?: string;

      openOverUnder?: string;

      openSpread?: string;

      overUnder?: string;

      spread?: string;
    }
  }

  export interface Players {
    alias?: string;

    firstName?: string;

    lastName?: string;

    name?: string;

    photo?: string;

    playerID?: string;

    status?: 'ir' | 'active' | 'out' | 'suspended' | 'questionable' | 'doubtful' | 'probable';

    statusDetails?: string;

    teamID?: string;
  }

  export interface Status {
    cancelled?: boolean;

    completed?: boolean;

    currentPeriodID?: string;

    delayed?: boolean;

    displayLong?: string;

    displayShort?: string;

    ended?: boolean;

    finalized?: boolean;

    hardStart?: boolean;

    live?: boolean;

    oddsAvailable?: boolean;

    oddsPresent?: boolean;

    periods?: Status.Periods;

    previousPeriodID?: string;

    reGrade?: boolean;

    started?: boolean;

    startsAt?: string;
  }

  export namespace Status {
    export interface Periods {
      ended?: Array<string>;

      started?: Array<string>;
    }
  }

  export interface Teams {
    away?: Teams.Away;

    home?: Teams.Home;
  }

  export namespace Teams {
    export interface Away {
      colors?: Away.Colors;

      logo?: string;

      names?: Away.Names;

      score?: number;

      statEntityID?: string;

      teamID?: string;
    }

    export namespace Away {
      export interface Colors {
        primary?: string;

        primaryContrast?: string;

        secondary?: string;

        secondaryContrast?: string;
      }

      export interface Names {
        long?: string;

        medium?: string;

        short?: string;
      }
    }

    export interface Home {
      colors?: Home.Colors;

      logo?: string;

      names?: Home.Names;

      score?: number;

      statEntityID?: string;

      teamID?: string;
    }

    export namespace Home {
      export interface Colors {
        primary?: string;

        primaryContrast?: string;

        secondary?: string;

        secondaryContrast?: string;
      }

      export interface Names {
        long?: string;

        medium?: string;

        short?: string;
      }
    }
  }
}

export interface EventGetParams extends NextCursorPageParams {
  /**
   * A bookmakerID or comma-separated list of bookmakerIDs to include odds for
   */
  bookmakerID?: string;

  /**
   * Only include cancelled Events (true), only non-cancelled Events (false) or all
   * Events (omit)
   */
  cancelled?: boolean;

  /**
   * Only include Events which have have ended (true), only Events which have not
   * ended (false) or all Events (omit)
   */
  ended?: boolean;

  /**
   * An eventID to get Event data for
   */
  eventID?: string;

  /**
   * A comma separated list of eventIDs to get Event data for
   */
  eventIDs?: string;

  /**
   * Whether to expand the results object to include all stat values rather than just
   * the base set
   */
  expandResults?: boolean;

  /**
   * Only include finalized Events (true), exclude unfinalized Events (false) or all
   * Events (omit)
   */
  finalized?: boolean;

  /**
   * Whether to include alternate lines in the odds byBookmaker data
   */
  includeAltLines?: boolean;

  /**
   * Whether to include open and close odds values (openOdds, closeOdds, openSpread,
   * closeSpread, openOverUnder, closeOverUnder) in the odds byBookmaker data
   */
  includeOpenCloseOdds?: boolean;

  /**
   * Whether to include opposing odds for each included oddID
   */
  includeOpposingOdds?: boolean;

  /**
   * A leagueID or comma-separated list of leagueIDs to get Events for
   */
  leagueID?: string;

  /**
   * Only include live Events (true), only non-live Events (false) or all Events
   * (omit)
   */
  live?: boolean;

  /**
   * An oddID or comma-separated list of oddIDs to include odds for
   */
  oddID?: string;

  /**
   * Whether you want only Events which do (true) or do not (false) have odds markets
   * which are currently available (open for wagering)
   */
  oddsAvailable?: boolean;

  /**
   * Whether you want only Events which do (true) or do not (false) have any
   * associated odds markets regardless of whether those odds markets are currently
   * available (open for wagering)
   */
  oddsPresent?: boolean;

  /**
   * A playerID or comma-separated list of playerIDs to include Events (and
   * associated odds) for
   */
  playerID?: string;

  /**
   * A sportID or comma-separated list of sportIDs to get Events for
   */
  sportID?: string;

  /**
   * Only include Events which have have previously started (true), only Events which
   * have not previously started (false) or all Events (omit)
   */
  started?: boolean;

  /**
   * Get Events that start after this date
   */
  startsAfter?: string;

  /**
   * Get Events that start before this date
   */
  startsBefore?: string;

  /**
   * A teamID or comma-separated list of teamIDs to include Events for
   */
  teamID?: string;

  /**
   * Only include Events of the specified type
   */
  type?: string;
}

export declare namespace Events {
  export {
    type Event as Event,
    type EventsNextCursorPage as EventsNextCursorPage,
    type EventGetParams as EventGetParams,
  };
}
