# Sports Odds API - A TypeScript & JavaScript SDK for Sports Betting Odds & Sports Data Powered by the SportsGameOdds API

Get live betting odds, spreads, and totals for NFL, NBA, MLB, and 50 additional sports and leagues. Production-ready TypeScript/JavaScript SDK with WebSocket support, 99.9% uptime, and sub-minute updates during live games. Perfect for developers building sportsbook platforms, odds comparison tools, positive EV models, and anything else that requires fast, accurate sports data.

[![NPM version](<https://img.shields.io/npm/v/sports-odds-api.svg?label=npm%20(stable)>)](https://npmjs.org/package/sports-odds-api) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/sports-odds-api)

This library provides convenient access to the Sports Game Odds REST API from server-side TypeScript or JavaScript.

The REST API documentation can be found on [sportsgameodds.com](https://sportsgameodds.com/docs/reference). The full API of this library can be found in [api.md](api.md).

## Features

**For developers building the next generation of sports stats and/or betting applications:**

- 📈 **3k+ odds markets** including moneylines, spreads, over/unders, team props, player props & more
- 🏈 **50+ leagues covered** including NFL, NBA, MLB, NHL, NCAAF, NCAAB, EPL, UCL, UFC, PGA, ATP & more
- 📊 **80+ sportsbooks** with unified odds formats, alt lines & deeplinks
- 📺 **Live scores & stats** coverage on all games, teams, and players
- ⚡ **Sub-100ms response times** and sub-minute updates for fast data
- 🔧 **Full TypeScript support** with comprehensive type definitions
- 💰 **Developer-friendly pricing** with a generous free tier
- ⏱️ **5-minute setup** with copy-paste examples

## Installation

```sh
npm install sports-odds-api
```

## Obtain an API Key

Get a free API key from [sportsgameodds.com](https://sportsgameodds.com/pricing).

Unlike enterprise-only solutions, the Sports Game Odds API offers a developer-friendly experience, transparent pricing, comprehensive documentation, and a generous free tier.

## Usage

The full API of this library can be found in [api.md](api.md).

<!-- prettier-ignore -->
```js
import SportsGameOdds from 'sports-odds-api';

const client = new SportsGameOdds({
  apiKeyParam: process.env['YOUR_API_KEY'], // This is the default and can be omitted
});

const page = await client.events.get();
const event = page.data[0];

console.log(event.activity);
```

# Real-Time Event Streaming API

This API endpoint is only available to **AllStar** and **custom plan** subscribers. It is not included with basic subscription tiers. [Contact support](mailto:api@sportsgameodds.com) to get access.

This streaming API is currently in **beta**. API call patterns, response formats, and functionality may change. Fully managed streaming via SDK may be available in future releases.

Our Streaming API provides real-time updates for Event objects through WebSocket connections. Instead of polling our REST endpoints, you can maintain a persistent connection to receive instant notifications when events change. This is ideal for applications that need immediate updates with minimal delay.

We use [Pusher Protocol](https://pusher.com/docs/channels/library_auth_reference/pusher-websockets-protocol/) for WebSocket communication. While you can connect using any WebSocket library, we strongly recommend using any [Pusher Client Library](https://pusher.com/docs/channels/library_auth_reference/pusher-client-libraries) (ex: [Javascript](https://github.com/pusher/pusher-js), [Python](https://github.com/pusher/pusher-http-python))


## How It Works

The streaming process involves two steps:

1. **Get Connection Details**: Make a request using `client.stream.events()` to receive:
    - WebSocket authentication credentials
    - WebSocket URL/channel info
    - Initial snapshot of current data

2. **Connect and Stream**: Use the provided details to connect via Pusher (or another WebSocket library) and receive real-time `eventID` notifications for changed events

Your API key will have limits on concurrent streams.

## Available Feeds

Subscribe to different feeds using the `feed` query parameter:

| Feed              | Description                                                                 | Required Parameters |
| ----------------- | --------------------------------------------------------------------------- | ------------------- |
| `events:live`     | All events currently in progress (started but not finished)                | None                |
| `events:upcoming` | Upcoming events with available odds for a specific league                  | `leagueID`          |
| `events:byid`     | Updates for a single specific event                                         | `eventID`           |

The number of supported feeds will increase over time. Please reach out if you have a use case which can't be covered by these feeds.

## Quick Start Example

Here's the minimal code to connect to live events:

```js [JavaScript/Node.js]
const axios = require("axios");
const Pusher = require("pusher-js");
const SportsGameOdds = require("sports-odds-api");


const STREAM_FEED = "events:live"; // ex: events:upcoming, events:byid, events:live
const API_KEY = "YOUR API KEY";
const client = new SportsGameOdds({ apiKeyHeader: API_KEY });

const run = async () => {
  // Initialize a data structure where we'll save the event data
  const EVENTS = new Map();

  // Call this endpoint to get initial data and connection parameters
  const streamInfo = await client.stream.events({ feed: STREAM_FEED })

  // Seed initial data
  streamInfo.data.forEach((event) => EVENTS.set(event?.eventID, event));

  // Connect to WebSocket server
  const pusher = new Pusher(streamInfo.pusherKey, streamInfo.pusherOptions);
  pusher.subscribe(streamInfo.channel).bind("data", async (changedEvents) => {
    // Get the eventIDs that changed
    const eventIDs = changedEvents.map(({ eventID }) => eventID).join(",");

    // Get the full event data for the changed events
     for await (const event of client.events.getEvents({ eventIDs })) {
        // Update our data with the full event data
        EVENTS.set(event?.eventID, event);
     }
  });

  // Use pusher.disconnect to disconnect from the WebSocket server
  process.on("SIGINT", pusher.disconnect);
};
run();
```

### Request & Response types

This library includes TypeScript definitions for all request params and response fields. You may import and use them like so:

<!-- prettier-ignore -->
```ts
import SportsGameOdds from 'sports-odds-api';

const client = new SportsGameOdds({
  apiKeyParam: process.env['SPORTS_ODDS_API_KEY_HEADER'], // This is the default and can be omitted
});

const [event]: [SportsGameOdds.Event] = await client.events.get();
```

Documentation for each method, request param, and response field are available in docstrings and will appear on hover in most modern editors.

## Handling errors

When the library is unable to connect to the API,
or if the API returns a non-success status code (i.e., 4xx or 5xx response),
a subclass of `APIError` will be thrown:

<!-- prettier-ignore -->
```ts
const page = await client.events.get().catch(async (err) => {
  if (err instanceof SportsGameOdds.APIError) {
    console.log(err.status); // 400
    console.log(err.name); // BadRequestError
    console.log(err.headers); // {server: 'nginx', ...}
  } else {
    throw err;
  }
});
```

Error codes are as follows:

| Status Code | Error Type                 |
| ----------- | -------------------------- |
| 400         | `BadRequestError`          |
| 401         | `AuthenticationError`      |
| 403         | `PermissionDeniedError`    |
| 404         | `NotFoundError`            |
| 422         | `UnprocessableEntityError` |
| 429         | `RateLimitError`           |
| >=500       | `InternalServerError`      |
| N/A         | `APIConnectionError`       |

### Retries

Certain errors will be automatically retried 2 times by default, with a short exponential backoff.
Connection errors (for example, due to a network connectivity problem), 408 Request Timeout, 409 Conflict,
429 Rate Limit, and >=500 Internal errors will all be retried by default.

You can use the `maxRetries` option to configure or disable this:

<!-- prettier-ignore -->
```js
// Configure the default for all requests:
const client = new SportsGameOdds({
  maxRetries: 0, // default is 2
});

// Or, configure per-request:
await client.events.get({
  maxRetries: 5,
});
```

### Timeouts

Requests time out after 1 minute by default. You can configure this with a `timeout` option:

<!-- prettier-ignore -->
```ts
// Configure the default for all requests:
const client = new SportsGameOdds({
  timeout: 20 * 1000, // 20 seconds (default is 1 minute)
});

// Override per-request:
await client.events.get({
  timeout: 5 * 1000,
});
```

On timeout, an `APIConnectionTimeoutError` is thrown.

Note that requests which time out will be [retried twice by default](#retries).

## Auto-pagination

Requests for Events, Teams, and Players are paginated.
You can use the `for await … of` syntax to iterate through items across all pages:

```ts
async function fetchAllEvents(params) {
  const allEvents = [];
  // Automatically fetches more pages as needed.
  for await (const event of client.events.get({ limit: 30 })) {
    allEvents.push(event);
  }
  return allEvents;
}
```

Alternatively, you can request a single page at a time:

```ts
let page = await client.events.get({ limit: 30 });
for (const event of page.data) {
  console.log(event);
}

// Convenience methods are provided for manually paginating:
while (page.hasNextPage()) {
  page = await page.getNextPage();
  // ...
}
```

## Advanced Usage

### Accessing raw Response data (e.g., headers)

The "raw" `Response` returned by `fetch()` can be accessed through the `.asResponse()` method on the `APIPromise` type that all methods return.
This method returns as soon as the headers for a successful response are received and does not consume the response body, so you are free to write custom parsing or streaming logic.

You can also use the `.withResponse()` method to get the raw `Response` along with the parsed data.
Unlike `.asResponse()` this method consumes the body, returning once it is parsed.

<!-- prettier-ignore -->
```ts
const client = new SportsGameOdds();

const response = await client.events.get().asResponse();
console.log(response.headers.get('X-My-Header'));
console.log(response.statusText); // access the underlying Response object

const { data: page, response: raw } = await client.events.get().withResponse();
console.log(raw.headers.get('X-My-Header'));
for await (const event of page) {
  console.log(event.activity);
}
```

### Logging

> [!IMPORTANT]
> All log messages are intended for debugging only. The format and content of log messages
> may change between releases.

#### Log levels

The log level can be configured in two ways:

1. Via the `SPORTS_GAME_ODDS_LOG` environment variable
2. Using the `logLevel` client option (overrides the environment variable if set)

```ts
import SportsGameOdds from 'sports-odds-api';

const client = new SportsGameOdds({
  logLevel: 'debug', // Show all log messages
});
```

Available log levels, from most to least verbose:

- `'debug'` - Show debug messages, info, warnings, and errors
- `'info'` - Show info messages, warnings, and errors
- `'warn'` - Show warnings and errors (default)
- `'error'` - Show only errors
- `'off'` - Disable all logging

At the `'debug'` level, all HTTP requests and responses are logged, including headers and bodies.
Some authentication-related headers are redacted, but sensitive data in request and response bodies
may still be visible.

#### Custom logger

By default, this library logs to `globalThis.console`. You can also provide a custom logger.
Most logging libraries are supported, including [pino](https://www.npmjs.com/package/pino), [winston](https://www.npmjs.com/package/winston), [bunyan](https://www.npmjs.com/package/bunyan), [consola](https://www.npmjs.com/package/consola), [signale](https://www.npmjs.com/package/signale), and [@std/log](https://jsr.io/@std/log). If your logger doesn't work, please open an issue.

When providing a custom logger, the `logLevel` option still controls which messages are emitted, messages
below the configured level will not be sent to your logger.

```ts
import SportsGameOdds from 'sports-odds-api';
import pino from 'pino';

const logger = pino();

const client = new SportsGameOdds({
  logger: logger.child({ name: 'SportsGameOdds' }),
  logLevel: 'debug', // Send all messages to pino, allowing it to filter
});
```

### Making custom/undocumented requests

This library is typed for convenient access to the documented API. If you need to access undocumented
endpoints, params, or response properties, the library can still be used.

#### Undocumented endpoints

To make requests to undocumented endpoints, you can use `client.get`, `client.post`, and other HTTP verbs.
Options on the client, such as retries, will be respected when making these requests.

```ts
await client.post('/some/path', {
  body: { some_prop: 'foo' },
  query: { some_query_arg: 'bar' },
});
```

#### Undocumented request params

To make requests using undocumented parameters, you may use `// @ts-expect-error` on the undocumented
parameter. This library doesn't validate at runtime that the request matches the type, so any extra values you
send will be sent as-is.

```ts
client.events.get({
  // ...
  // @ts-expect-error baz is not yet public
  baz: 'undocumented option',
});
```

For requests with the `GET` verb, any extra params will be in the query, all other requests will send the
extra param in the body.

If you want to explicitly send an extra argument, you can do so with the `query`, `body`, and `headers` request
options.

#### Undocumented response properties

To access undocumented response properties, you may access the response object with `// @ts-expect-error` on
the response object, or cast the response object to the requisite type. Like the request params, we do not
validate or strip extra properties from the response from the API.

### Customizing the fetch client

By default, this library expects a global `fetch` function is defined.

If you want to use a different `fetch` function, you can either polyfill the global:

```ts
import fetch from 'my-fetch';

globalThis.fetch = fetch;
```

Or pass it to the client:

```ts
import SportsGameOdds from 'sports-odds-api';
import fetch from 'my-fetch';

const client = new SportsGameOdds({ fetch });
```

### Fetch options

If you want to set custom `fetch` options without overriding the `fetch` function, you can provide a `fetchOptions` object when instantiating the client or making a request. (Request-specific options override client options.)

```ts
import SportsGameOdds from 'sports-odds-api';

const client = new SportsGameOdds({
  fetchOptions: {
    // `RequestInit` options
  },
});
```

#### Configuring proxies

To modify proxy behavior, you can provide custom `fetchOptions` that add runtime-specific proxy
options to requests:

<img src="https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/node.svg" align="top" width="18" height="21"> **Node** <sup>[[docs](https://github.com/nodejs/undici/blob/main/docs/docs/api/ProxyAgent.md#example---proxyagent-with-fetch)]</sup>

```ts
import SportsGameOdds from 'sports-odds-api';
import * as undici from 'undici';

const proxyAgent = new undici.ProxyAgent('http://localhost:8888');
const client = new SportsGameOdds({
  fetchOptions: {
    dispatcher: proxyAgent,
  },
});
```

<img src="https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/bun.svg" align="top" width="18" height="21"> **Bun** <sup>[[docs](https://bun.sh/guides/http/proxy)]</sup>

```ts
import SportsGameOdds from 'sports-odds-api';

const client = new SportsGameOdds({
  fetchOptions: {
    proxy: 'http://localhost:8888',
  },
});
```

<img src="https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/deno.svg" align="top" width="18" height="21"> **Deno** <sup>[[docs](https://docs.deno.com/api/deno/~/Deno.createHttpClient)]</sup>

```ts
import SportsGameOdds from 'npm:sports-odds-api';

const httpClient = Deno.createHttpClient({ proxy: { url: 'http://localhost:8888' } });
const client = new SportsGameOdds({
  fetchOptions: {
    client: httpClient,
  },
});
```

## Requirements

TypeScript >= 4.9 is supported.

The following runtimes are supported:

- Web browsers (Up-to-date Chrome, Firefox, Safari, Edge, and more)
- Node.js 20 LTS or later ([non-EOL](https://endoflife.date/nodejs)) versions.
- Deno v1.28.0 or higher.
- Bun 1.0 or later.
- Cloudflare Workers.
- Vercel Edge Runtime.
- Jest 28 or greater with the `"node"` environment (`"jsdom"` is not supported at this time).
- Nitro v2.6 or greater.
