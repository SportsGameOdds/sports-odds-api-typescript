// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { SportsOddsAPI } from '../client';

export abstract class APIResource {
  protected _client: SportsOddsAPI;

  constructor(client: SportsOddsAPI) {
    this._client = client;
  }
}
