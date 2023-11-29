import dotenv from 'dotenv';
import type { Knex } from 'knex';
import { join } from 'path';

dotenv.config({
    path: join(__dirname, '..', '..', '..', '..', '.env'),
});

const config: Record<string, Knex.Config> = {
    development: {
        client: 'pg',
        connection: {
            host: process.env.POSTGRES_HOST,
            port: 5432,
            user: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DATABASE,
        },
        pool: { min: 2, max: 10 },
        migrations: {
            directory: join(__dirname, 'migrations'),
        },
    },
    production: {
        client: 'pg',
        connection: {
            host: process.env.POSTGRES_HOST,
            port: 5432,
            user: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DATABASE,
        },
        pool: { min: 2, max: 10 },
        migrations: {
            directory: join(__dirname, 'migrations'),
        },
    },
};

module.exports = config;
