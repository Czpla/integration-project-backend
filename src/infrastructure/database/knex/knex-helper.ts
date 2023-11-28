/* eslint-disable @typescript-eslint/no-floating-promises */
import knex, { type Knex } from 'knex';

export class KnexHelper {
    private static _knex: Knex | null = null;
    private static get knex(): Knex {
        if (!KnexHelper._knex) {
            throw new Error('Knex is not connected. You can\'t disconnect it.');
        }

        return KnexHelper._knex;
    }

    public static getInstance(): Knex {
        return this.knex;
    }

    public static async connect(host: string, user: string, password: string, database: string): Promise<void> {
        this._knex = knex({
            client: 'pg',
            connection: {
                host: host,
                port: 5432,
                user: user,
                password: password,
                database: database,
            },
            pool: { min: 2, max: 10 },
        });
    }

    public static async disconnect(): Promise<void> {
        await this.knex.destroy();
    }

    public static async createTransaction(): Promise<Knex.Transaction> {
        // eslint-disable-next-line @typescript-eslint/return-await
        return await this.knex.transaction();
    }

    public static createQuery(): Knex.QueryBuilder {
        return this.knex.queryBuilder();
    }

    public static async transaction(callback: (transaction: Knex.Transaction) => Promise<void>): Promise<void> {
        const transaction = await this.createTransaction();

        await callback(transaction)
            .then(() => transaction.commit())
            .catch((error: any) => {
                transaction.rollback();
                throw error;
            })
            .finally(async () => {
                await transaction.destroy();
            });
    }

    // public static raw(query: string, ...bindings: any[]): Knex.Raw {
    //     return this.knex.raw(query, ...bindings);
    // }

    public static async select(query: Knex.QueryBuilder, tables: Record<string, string[]>): Promise<any> {
        const { select, fields } = this.createSelect(tables);

        const json = await query.select(select);

        if (!json) {
            return null;
        }

        if (Array.isArray(json)) {
            return json.map((row) => this.mapRow(fields, row));
        }

        return this.mapRow(fields, json);
    }

    public static createSelect(tables: Record<string, string[]>) {
        const fields = Object.entries(tables).flatMap(([table, fields]) => {
            return fields.map((field) => `${table}.${field}`);
        });

        const select = fields.reduce((acc, field) => {
            return Object.assign(acc, { [field]: field });
        }, {});

        return { select, fields };
    }

    public static mapRow(fields: string[], row: any): any {
        const json: any = {};

        for (const field of fields) {
            const [table, column] = field.split('.');

            const value = row[field];

            if (!json[table]) {
                json[table] = {};
            }

            json[table][column] = value;
        }

        return json;
    }
}
