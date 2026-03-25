import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
dotenv.config();

import path from 'path';
import { fileURLToPath } from 'url';
import { Pool } from 'pg';
import { promises as fs } from 'fs';
import {
    Kysely,
    Migrator,
    PostgresDialect,
    FileMigrationProvider,
} from 'kysely';

// ✅ ESM replacement for __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// DEBUG: show the loaded database URL
console.log('DEBUG: Loaded DATABASE_URL:', process.env.DATABASE_URL);

async function migrateToLatest() {
    if (!process.env.DATABASE_URL) {
        console.error('❌ DATABASE_URL is not defined in your .env.local');
        process.exit(1);
    }

    // Always use SSL but ignore certificate verification (TLS 0)
    const pool = new Pool({
        connectionString: process.env.DATABASE_URL,
        ssl: { rejectUnauthorized: false }, // ✅ TLS 0
    });

    const db = new Kysely({
        dialect: new PostgresDialect({ pool }),
    });

    const migrator = new Migrator({
        db,
        provider: new FileMigrationProvider({
            fs,
            path,
            migrationFolder: path.join(__dirname, '../migrations'),
        }),
    });

    try {
        const { error, results } = await migrator.migrateToLatest();

        results?.forEach((it) => {
            if (it.status === 'Success') {
                console.log(`✅ migration "${it.migrationName}" executed`);
            } else {
                console.error(`❌ migration "${it.migrationName}" failed`);
            }
        });

        if (error) {
            console.error('❌ Migration failed');
            console.error(error);
            process.exit(1);
        } else {
            console.log('🎉 All migrations executed successfully!');
        }
    } catch (err) {
        console.error('❌ Migration encountered an unexpected error:');
        console.error(err);
        process.exit(1);
    } finally {
        await db.destroy();
    }
}

migrateToLatest();