#!/usr/bin/env ts-node
// Sports Odds API TypeScript SDK - Basic Usage Example
// Get your API key from https://sportsgameodds.com/pricing

import SportsGameOdds from 'sports-odds-api';

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
  console.log('Sports Odds API TypeScript SDK - Basic Usage Examples\n');

  try {
    // Example 1: Fetch recent events
    console.log('=== Fetching Events ===');
    const page = await client.events.get({ limit: 10 });

    if (page.data.length === 0) {
      console.log('No events found');
    } else {
      console.log(`Found ${page.data.length} events:`);
      page.data.slice(0, 3).forEach((event) => {
        console.log(`  - ${event.eventID}: ${event.activity}`);
      });
    }

    // Example 2: Auto-pagination
    console.log('\n=== Auto-Pagination Example ===');
    const events = [];
    let count = 0;

    for await (const event of client.events.get({ limit: 5 })) {
      count++;
      if (count <= 10) {
        console.log(`  Event ${count}: ${event.eventID}`);
      }
      events.push(event);
      if (count >= 15) break; // Limit for demo purposes
    }

    console.log(`Processed ${count} events across multiple pages`);

    // Example 3: Error handling
    console.log('\n=== Error Handling Example ===');
    try {
      await client.events.get({ eventIDs: 'invalid-id' });
    } catch (err: unknown) {
      if (err instanceof SportsGameOdds.APIError) {
        console.log(`Caught ${err.name}: ${err.message}`);
      }
    }

    console.log('\nExamples completed successfully!');
  } catch (error: unknown) {
    console.error('Unexpected error:', error instanceof Error ? error.message : String(error));
    process.exit(1);
  }
}

main();
