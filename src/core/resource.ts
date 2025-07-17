// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { SportsGameOdds } from '../client';

export abstract class APIResource {
  protected _client: SportsGameOdds;

  constructor(client: SportsGameOdds) {
    this._client = client;
  }
}
