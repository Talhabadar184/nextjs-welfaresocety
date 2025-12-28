import { Kysely, PostgresDialect, Generated } from 'kysely'
import { Pool } from 'pg'

export interface EventsTable {
    id: Generated<number>
    slug: string
    title: string
    date: string
    description: string
    image: string
    sub_images: string[] | null
    instagram: string | null
    facebook: string | null
    linkedin: string | null
    created_at: Generated<Date>
}

export interface RegistrationsTable {
    id: Generated<number>
    full_name: string
    reg_number: string
    university_email: string
    phone_number: string
    semester: string
    domain: string
    reason: string | null
    created_at: Generated<Date>
}

export interface Database {
    events: EventsTable
    registrations: RegistrationsTable
}

export const db = new Kysely<Database>({
    dialect: new PostgresDialect({
        pool: new Pool({
            connectionString: process.env.DATABASE_URL,
        }),
    }),
})
