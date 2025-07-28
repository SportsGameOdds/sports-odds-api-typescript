// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SportsGameOdds from 'sports-odds-api';

const client = new SportsGameOdds({
  apiKeyHeader: 'My API Key Header',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource events', () => {
  // skipped: tests are disabled for the time being
  test.skip('get', async () => {
    const responsePromise = client.events.get();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('get: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.events.get(
        {
          bookmakerID: 'bookmakerID',
          cancelled: true,
          cursor: 'cursor',
          ended: true,
          eventID: 'eventID',
          finalized: true,
          includeAltLines: true,
          includeOpposingOdds: true,
          leagueID: 'leagueID',
          limit: 0,
          live: true,
          oddID: 'oddID',
          oddsAvailable: true,
          oddsPresent: true,
          playerID: 'playerID',
          sportID: 'sportID',
          started: true,
          startsAfter: '2019-12-27T18:11:19.117Z',
          startsBefore: '2019-12-27T18:11:19.117Z',
          teamID: 'teamID',
          type: 'type',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(SportsGameOdds.NotFoundError);
  });
});
