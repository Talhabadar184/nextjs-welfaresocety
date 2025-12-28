import { Kysely, sql } from 'kysely'

export async function up(db: Kysely<any>): Promise<void> {
    // Create events table
    await db.schema
        .createTable('events')
        .addColumn('id', 'serial', (col) => col.primaryKey())
        .addColumn('slug', 'text', (col) => col.notNull().unique())
        .addColumn('title', 'text', (col) => col.notNull())
        .addColumn('date', 'text', (col) => col.notNull())
        .addColumn('description', 'text', (col) => col.notNull())
        .addColumn('image', 'text', (col) => col.notNull())
        .addColumn('sub_images', sql`text[]`)
        .addColumn('instagram', 'text')
        .addColumn('facebook', 'text')
        .addColumn('linkedin', 'text')
        .addColumn('created_at', 'timestamp', (col) =>
            col.defaultTo(sql`now()`).notNull()
        )
        .execute()

    // Create registrations table (from formSlice)
    await db.schema
        .createTable('registrations')
        .addColumn('id', 'serial', (col) => col.primaryKey())
        .addColumn('full_name', 'text', (col) => col.notNull())
        .addColumn('reg_number', 'text', (col) => col.notNull())
        .addColumn('university_email', 'text', (col) => col.notNull())
        .addColumn('phone_number', 'text', (col) => col.notNull())
        .addColumn('semester', 'text', (col) => col.notNull())
        .addColumn('domain', 'text', (col) => col.notNull())
        .addColumn('reason', 'text')
        .addColumn('created_at', 'timestamp', (col) =>
            col.defaultTo(sql`now()`).notNull()
        )
        .execute()
}

export async function down(db: Kysely<any>): Promise<void> {
    await db.schema.dropTable('registrations').execute()
    await db.schema.dropTable('events').execute()
}
