const { execSync } = require('child_process');

/**
 * migrate-vercel.js
 * 
 * This script is triggered during the Vercel build process to ensure
 * that the Supabase database is up-to-date with the latest migrations.
 */

console.log('--- Starting Database Migrations ---');

try {
    // Execute the existing TypeScript migration script using npx tsx
    // This ensures that we use the same migration logic as the development environment.
    execSync('npx tsx scripts/migrate.ts', {
        stdio: 'inherit',
        env: { ...process.env } // Pass through environment variables (including DATABASE_URL)
    });

    console.log('--- Migrations Completed Successfully ---');

    console.log('--- Starting Database Seeding ---');
    execSync('npx tsx scripts/seed.ts', {
        stdio: 'inherit',
        env: { ...process.env }
    });
    console.log('--- Seeding Completed Successfully ---');
} catch (error) {
    console.error('!!! Migration or Seeding Failed !!!');
    console.error('Error Details:', error.message);

    // Exit with a non-zero code to fail the Vercel build if migrations fail.
    // This prevents deploying a broken application state.
    process.exit(1);
}
