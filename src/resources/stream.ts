// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as EventsAPI from './events';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Stream extends APIResource {
  /**
   * Setup streamed (WebSocket) connection
   */
  getEvents(
    query: StreamGetEventsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<StreamGetEventsResponse> {
    return this._client.get('/stream/events', { query, ...options });
  }
}

export interface StreamGetEventsResponse {
  channel?: string;

  data?: Array<EventsAPI.Event>;

  pusherKey?: string;

  pusherOptions?: StreamGetEventsResponse.PusherOptions;

  success?: boolean;

  user?: string;
}

export namespace StreamGetEventsResponse {
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

export interface StreamGetEventsParams {
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
  export {
    type StreamGetEventsResponse as StreamGetEventsResponse,
    type StreamGetEventsParams as StreamGetEventsParams,
  };
}
