// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Stats extends APIResource {
  /**
   * Get a list of StatIDs
   */
  getStats(
    query: StatGetStatsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<StatGetStatsResponse> {
    return (
      this._client.get('/stats/', { query, ...options }) as APIPromise<{ data: StatGetStatsResponse }>
    )._thenUnwrap((obj) => obj.data);
  }
}

export interface Stat {
  description?: string;

  displays?: Stat.Displays;

  isScoreStat?: boolean;

  statID?: string;

  supportedLevels?: Stat.SupportedLevels;

  supportedSports?: { [key: string]: unknown };

  units?: Stat.Units;
}

export namespace Stat {
  export interface Displays {
    long?: string;

    short?: string;
  }

  export interface SupportedLevels {
    all?: boolean;

    player?: boolean;

    team?: boolean;
  }

  export interface Units {
    long?: Units.Long;

    short?: Units.Short;
  }

  export namespace Units {
    export interface Long {
      plural?: string;

      singular?: string;
    }

    export interface Short {
      plural?: string;

      singular?: string;
    }
  }
}

export type StatGetStatsResponse = Array<Stat>;

export interface StatGetStatsParams {
  /**
   * SportID to get StatIDs for
   */
  sportID?: string;

  /**
   * StatID to get data for
   */
  statID?: string;

  /**
   * Level of the stat, must be used in combination with sportID. Must be one of all,
   * player, or team. Shows stats that are applicable to that specified entity,
   * defaults to all.
   */
  statLevel?: string;
}

export declare namespace Stats {
  export {
    type Stat as Stat,
    type StatGetStatsResponse as StatGetStatsResponse,
    type StatGetStatsParams as StatGetStatsParams,
  };
}
