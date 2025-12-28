import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
dotenv.config();

import path from 'path';
import { fileURLToPath } from 'url';
import { Pool } from 'pg';
import {
    Kysely,
    Migrator,
    PostgresDialect,
    FileMigrationProvider,
} from 'kysely';
import { promises as fs } from 'fs';

// ✅ ESM replacement for __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('DEBUG: Loaded DATABASE_URL:', process.env.DATABASE_URL);

async function migrateToLatest() {
    const pool = new Pool({
        connectionString: process.env.DATABASE_URL,
        ssl:
            process.env.NODE_ENV === 'production'
                ? { rejectUnauthorized: false }
                : false,
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

    const { error, results } = await migrator.migrateToLatest();

    results?.forEach((r) => {
        if (r.status === 'Success') {
            console.log(`✅ ${r.migrationName}`);
        } else {
            console.error(`❌ ${r.migrationName}`);
        }
    });

    if (error) {
        console.error('❌ Migration failed');
        console.error(error);
        process.exit(1);
    }

    await db.destroy();
}

migrateToLatest();
