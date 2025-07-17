// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Sports extends APIResource {
  /**
   * Get a list of sports
   */
  list(options?: RequestOptions): APIPromise<SportListResponse> {
    return this._client.get('/sports/', options);
  }
}

export interface SportListResponse {
  data?: Array<SportListResponse.Data>;
}

export namespace SportListResponse {
  export interface Data {
    backgroundImage?: string;

    basePeriods?: Array<string>;

    clockType?: string;

    defaultPopularityScore?: number;

    enabled?: boolean;

    eventWord?: Data.EventWord;

    extraPeriods?: Array<string>;

    hasMeaningfulHomeAway?: boolean;

    imageIcon?: string;

    name?: string;

    pointWord?: Data.PointWord;

    shortName?: string;

    sportID?: string;

    squareImage?: string;
  }

  export namespace Data {
    export interface EventWord {
      long?: EventWord.Long;

      short?: EventWord.Short;
    }

    export namespace EventWord {
      export interface Long {
        plural?: string;

        singular?: string;
      }

      export interface Short {
        plural?: string;

        singular?: string;
      }
    }

    export interface PointWord {
      long?: PointWord.Long;

      short?: PointWord.Short;
    }

    export namespace PointWord {
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

export declare namespace Sports {
  export { type SportListResponse as SportListResponse };
}
