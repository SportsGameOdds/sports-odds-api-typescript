// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as EventsAPI from './events';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Stream extends APIResource {
  /**
   * Setup streamed (WebSocket) connection
   */
  events(
    query: StreamEventsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<StreamEventsResponse> {
    return this._client.get('/stream/events', { query, ...options });
  }
}

export interface StreamEventsResponse {
  channel?: string;

  data?: Array<EventsAPI.Event>;

  pusherKey?: string;

  pusherOptions?: StreamEventsResponse.PusherOptions;

  success?: boolean;

  user?: string;
}

export namespace StreamEventsResponse {
  export interface PusherOptions {
    channelAuthorization?: PusherOptions.ChannelAuthorization;

    cluster?: string;

    httpHost?: string;

    httpPort?: number;

    httpsPort?: number;

    wsHost?: string;

    wsPort?: number;

    wssPort?: number;
  }

  export namespace PusherOptions {
    export interface ChannelAuthorization {
      endpoint?: string;

      headers?: { [key: string]: string };
    }
  }
}

export interface StreamEventsParams {
  /**
   * An eventID to stream events for
   */
  eventID?: string;

  /**
   * The feed you would like to subscribe to
   */
  feed?: string;

  /**
   * A leagueID to stream events for
   */
  leagueID?: string;
}

export declare namespace Stream {
  export { type StreamEventsResponse as StreamEventsResponse, type StreamEventsParams as StreamEventsParams };
}
