// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Events extends APIResource {
  /**
   * Get a list of Events
   */
  list(
    query: EventListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<EventListResponse> {
    return this._client.get('/events/', { query, ...options });
  }
}

export interface Event {
  activity?: Event.Activity;

  eventID?: string;

  info?: Event.Info;

  leagueID?: string;

  manual?: boolean;

  odds?: { [key: string]: Event.Odds };

  players?: { [key: string]: Event.Players };

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
    seasonWeek?: string;
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

      isMainLine?: boolean;

      lastUpdatedAt?: string;

      odds?: string;

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

export interface EventListResponse {
  data?: Array<Event>;

  nextCursor?: string;

  success?: boolean;
}

export interface EventListParams {
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
   * The cursor for the request. Used to get the next group of Events. This should be
   * the nextCursor from the prior response.
   */
  cursor?: string;

  /**
   * Only include Events which have have ended (true), only Events which have not
   * ended (false) or all Events (omit)
   */
  ended?: boolean;

  /**
   * An eventID or comma-separated list of eventIDs to get Event data for
   */
  eventID?: string;

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
   * Whether to include opposing odds for each included oddID
   */
  includeOpposingOdds?: boolean;

  /**
   * A leagueID or comma-separated list of leagueIDs to get Events for
   */
  leagueID?: string;

  /**
   * The maximum number of Events to return
   */
  limit?: number;

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
    type EventListResponse as EventListResponse,
    type EventListParams as EventListParams,
  };
}
