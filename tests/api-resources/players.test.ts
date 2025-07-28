// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SportsGameOdds from 'sports-odds-api';

const client = new SportsGameOdds({
  apiKeyHeader: 'My API Key Header',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource players', () => {
  test('get', async () => {
    const responsePromise = client.players.get();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.players.get(
        { cursor: 'cursor', eventID: 'eventID', limit: 0, playerID: 'playerID', teamID: 'teamID' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(SportsGameOdds.NotFoundError);
  });
});
