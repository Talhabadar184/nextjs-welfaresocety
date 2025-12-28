import { Kysely, sql } from 'kysely'

export async function up(db: Kysely<any>): Promise<void> {
    await db.schema
        .createTable('contact_messages')
        .addColumn('id', 'serial', (col) => col.primaryKey())
        .addColumn('name', 'text', (col) => col.notNull())
        .addColumn('email', 'text', (col) => col.notNull())
        .addColumn('subject', 'text', (col) => col.notNull())
        .addColumn('message', 'text', (col) => col.notNull())
        .addColumn('created_at', 'timestamp', (col) =>
            col.defaultTo(sql`now()`).notNull()
        )
        .execute()
}

export async function down(db: Kysely<any>): Promise<void> {
    await db.schema.dropTable('contact_messages').execute()
}
