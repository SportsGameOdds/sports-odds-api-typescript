#!/usr/bin/env ts-node
// Sports Odds API TypeScript SDK - Streaming Example
// Get your API key from https://sportsgameodds.com/pricing
// Note: Streaming requires an AllStar plan subscription

import SportsGameOdds from 'sports-odds-api';
import Pusher from 'pusher-js';

const API_KEY = process.env.SPORTS_ODDS_API_KEY_HEADER;

if (!API_KEY) {
  console.error('Error: SPORTS_ODDS_API_KEY_HEADER environment variable not set');
  console.error('Usage: export SPORTS_ODDS_API_KEY_HEADER=\'your-api-key-here\'');
  process.exit(1);
}

// Initialize the client
const client = new SportsGameOdds({
  apiKeyHeader: API_KEY,
  timeout: 30 * 1000,
  maxRetries: 2,
});

async function main() {
  console.log('Sports Odds API TypeScript SDK - Streaming Example');
  console.log('Note: Streaming requires an AllStar plan subscription\n');

  try {
    const STREAM_FEED = 'events:live'; // Options: events:upcoming, events:byid, events:live

    console.log('=== Setting up Event Stream ===');
    console.log(`Feed: ${STREAM_FEED}\n`);

    // Initialize a data structure where we'll save the event data
    const events = new Map<string, any>();

    // Call this endpoint to get initial data and connection parameters
    console.log('Fetching stream info and initial data...');
    const streamInfo = await client.stream.events({ feed: STREAM_FEED });

    // Seed initial data
    if (streamInfo.data) {
      for (const event of streamInfo.data) {
        events.set(event.eventID, event);
      }
    }

    console.log(`✓ Loaded ${events.size} initial events`);
    console.log('✓ Connecting to WebSocket...');

    // Connect to WebSocket server
    const pusher = new Pusher(streamInfo.pusherKey!, streamInfo.pusherOptions as any);

    // Subscribe to the channel
    const channel = pusher.subscribe(streamInfo.channel!);

    // Bind to the 'data' event
    channel.bind('data', async (changedEvents: Array<{ eventID: string }>) => {
      const timestamp = new Date().toLocaleTimeString();
      console.log(`\n[${timestamp}] Received update for ${changedEvents.length} event(s)`);

      // Get the eventIDs that changed
      const eventIDs = changedEvents.map((e) => e.eventID).join(',');

      // Get the full event data for the changed events
      const updatedEvents = await client.events.get({ eventIDs });

      for (const event of updatedEvents.data) {
        // Update our data with the full event data
        events.set(event.eventID, event);

        console.log(`  Updated: ${event.eventID}`);
        if (event.awayTeamName && event.homeTeamName) {
          console.log(`    ${event.awayTeamName} @ ${event.homeTeamName}`);
        }
        if (event.activity) {
          console.log(`    Activity: ${event.activity}`);
        }
      }
    });

    console.log('✓ Connected! Listening for updates...');
    console.log('Press Ctrl+C to stop\n');

    // Handle graceful shutdown
    process.on('SIGINT', () => {
      console.log('\n\nDisconnecting...');
      pusher.disconnect();
      console.log('✓ Disconnected from stream');
      process.exit(0);
    });

    // Keep the script running
    await new Promise(() => {}); // Run forever until interrupted
  } catch (error: unknown) {
    if (error instanceof SportsGameOdds.PermissionDeniedError) {
      console.error('✗ Error: Streaming requires an AllStar plan subscription');
      console.error('Visit https://sportsgameodds.com/pricing to upgrade your plan');
      process.exit(1);
    } else if (error instanceof SportsGameOdds.APIError) {
      console.error(`✗ API Error: ${error.message}`);
      console.error(`Error type: ${error.name}`);
      process.exit(1);
    } else if (error instanceof Error && error.message.includes('pusher-js')) {
      console.error('✗ Missing dependency: pusher-js');
      console.error('Install it with: npm install pusher-js');
      process.exit(1);
    } else {
      console.error('✗ Unexpected error:', error instanceof Error ? error.message : String(error));
      if (error instanceof Error && error.stack) {
        console.error(error.stack.split('\n').slice(0, 5).join('\n'));
      }
      process.exit(1);
    }
  }
}

main();
