import { type Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('teachers', (table) => {
        table.uuid('id').primary();

        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('ra').notNullable();
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('teachers');
}
