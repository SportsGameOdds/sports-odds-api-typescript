// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Sports extends APIResource {
  /**
   * Get a list of sports
   */
  get(options?: RequestOptions): APIPromise<SportGetResponse> {
    return (this._client.get('/sports/', options) as APIPromise<{ data: SportGetResponse }>)._thenUnwrap(
      (obj) => obj.data,
    );
  }
}

export interface Sport {
  backgroundImage?: string;

  basePeriods?: Array<string>;

  clockType?: string;

  defaultPopularityScore?: number;

  enabled?: boolean;

  eventWord?: Sport.EventWord;

  extraPeriods?: Array<string>;

  hasMeaningfulHomeAway?: boolean;

  imageIcon?: string;

  name?: string;

  pointWord?: Sport.PointWord;

  shortName?: string;

  sportID?: string;

  squareImage?: string;
}

export namespace Sport {
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

export type SportGetResponse = Array<Sport>;

export declare namespace Sports {
  export { type Sport as Sport, type SportGetResponse as SportGetResponse };
}
