// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Stats extends APIResource {
  /**
   * Get a list of StatIDs
   */
  list(
    query: StatListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<StatListResponse> {
    return this._client.get('/stats/', { query, ...options });
  }
}

export interface StatListResponse {
  data?: Array<StatListResponse.Data>;
}

export namespace StatListResponse {
  export interface Data {
    description?: string;

    displays?: Data.Displays;

    isScoreStat?: boolean;

    statID?: string;

    supportedLevels?: Data.SupportedLevels;

    supportedSports?: { [key: string]: unknown };

    units?: Data.Units;
  }

  export namespace Data {
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
}

export interface StatListParams {
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
  export { type StatListResponse as StatListResponse, type StatListParams as StatListParams };
}
