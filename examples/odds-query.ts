#!/usr/bin/env ts-node
// Sports Odds API TypeScript SDK - Odds Query Example
// Get your API key from https://sportsgameodds.com/pricing

import SportsGameOdds from 'sports-odds-api';

const API_KEY = process.env['SPORTS_ODDS_API_KEY_HEADER'];

if (!API_KEY) {
  console.error('Error: SPORTS_ODDS_API_KEY_HEADER environment variable not set');
  console.error("Usage: export SPORTS_ODDS_API_KEY_HEADER='your-api-key-here'");
  process.exit(1);
}

// Initialize the client
const client = new SportsGameOdds({
  apiKeyHeader: API_KEY,
  timeout: 30 * 1000,
  maxRetries: 2,
});

async function main() {
  console.log('Sports Odds API TypeScript SDK - Odds Query Example\n');

  try {
    // Query for NFL events that are not finalized and have odds available
    console.log('=== Querying NFL Events with Odds ===');
    console.log('Filters: leagueID=NFL, finalized=false, oddsAvailable=true\n');

    const page = await client.events.get({
      leagueID: 'NFL',
      finalized: false,
      oddsAvailable: true,
      limit: 10,
    });

    if (page.data.length === 0) {
      console.log('No NFL events with odds found');
      process.exit(0);
    }

    console.log(`Found ${page.data.length} NFL events with odds\n`);

    // Parse all odds markets into a map
    // Structure: Map<eventID, Map<betTypeID, Array<odd>>>
    const oddsMap = new Map<string, Map<string, Array<any>>>();

    for (const event of page.data) {
      const eventID = event.eventID;
      if (!eventID) continue;

      oddsMap.set(eventID, new Map());

      console.log(`Event: ${eventID}`);
      console.log(`  ${event.teams?.home?.names?.long} @ ${event.teams?.away?.names?.long}`);

      // Check if odds exist
      if (!event.odds) {
        console.log('  No odds markets available\n');
        continue;
      }

      // Group odds by betTypeID
      // IMPORTANT: event.odds is an object keyed by oddID, not an array!
      for (const [oddId, odd] of Object.entries(event.odds)) {
        const betTypeID = odd.betTypeID || '';

        if (!oddsMap.get(eventID)!.has(betTypeID)) {
          oddsMap.get(eventID)!.set(betTypeID, []);
        }

        oddsMap.get(eventID)!.get(betTypeID)!.push(odd);
      }

      // Display summary of odds markets for this event
      const eventOdds = oddsMap.get(eventID)!;
      if (eventOdds.size > 0) {
        console.log('  Odds Markets:');
        for (const [betTypeID, markets] of eventOdds) {
          console.log(`    betTypeID ${betTypeID}: ${markets.length} markets`);
        }
      } else {
        console.log('  No odds markets available');
      }

      console.log();
    }

    // Display summary
    console.log('\n=== Summary ===');
    const totalEvents = oddsMap.size;
    let totalBetTypes = 0;
    let totalMarkets = 0;

    for (const markets of oddsMap.values()) {
      totalBetTypes += markets.size;
      for (const marketList of markets.values()) {
        totalMarkets += marketList.length;
      }
    }

    console.log(`Total events processed: ${totalEvents}`);
    console.log(`Total unique bet types: ${totalBetTypes}`);
    console.log(`Total odds markets: ${totalMarkets}`);

    // Show example of accessing the odds map
    if (oddsMap.size > 0) {
      const firstEventID = Array.from(oddsMap.keys())[0] || '';
      console.log(`\nExample - Accessing odds for event ${firstEventID}:`);

      const firstEventOdds = oddsMap.get(firstEventID)!;
      for (const [betTypeID, markets] of firstEventOdds) {
        console.log(`  betTypeID ${betTypeID}: ${markets.length} markets`);
        if (markets.length > 0) {
          const firstMarket = markets[0];
          console.log(
            `    Sample market: bookmakerID=${firstMarket.bookmakerID}, price=${firstMarket.price}`,
          );
        }
      }
    }

    console.log('\nOdds query example completed successfully!');
  } catch (error: unknown) {
    console.error('Error:', error instanceof Error ? error.message : String(error));
    process.exit(1);
  }
}

main();
