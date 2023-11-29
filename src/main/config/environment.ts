import { DomainError } from '@/domain/helpers';
import { config } from 'dotenv';

export class Environment {
    public static get isProd(): boolean {
        return this.get(Environment.Keys.NodeEnv, true) === 'production';
    }

    public static get isDev(): boolean {
        const env = this.get(Environment.Keys.NodeEnv, true);

        return !env || env === 'development';
    }

    public static get isTest(): boolean {
        return this.get(Environment.Keys.NodeEnv, true) === 'test';
    }

    public static get postgresHost(): string {
        return this.get(Environment.Keys.PostgresHost);
    }

    public static get postgresUser(): string {
        return this.get(Environment.Keys.PostgresUser);
    }

    public static get postgresPassword(): string {
        return this.get(Environment.Keys.PostgresPassword);
    }

    public static get postgresDatabase(): string {
        return this.get(Environment.Keys.PostgresDatabase);
    }

    public static get port(): number {
        const port = this.get(Environment.Keys.Port, true);

        return port ? parseInt(port) : 8080;
    }

    public static get<T extends string = string>(key: Environment.Keys): T;
    public static get<T extends string = string>(key: Environment.Keys, optional: boolean): T | null;
    public static get<T extends string = string>(key: Environment.Keys, optional = false): T | null {
        const value = process.env[key] as T;

        if (!value && !optional) {
            throw new DomainError(`Missing env var: ${key}`);
        }

        if (!value || value.length === 0) {
            return null;
        }

        return value ?? null;
    }

    public static exists(key: Environment.Keys): boolean {
        return !!process.env[key];
    }

    public static set(key: Environment.Keys, value: string): void {
        process.env[key] = value;
    }

    public static unset(key: Environment.Keys): void {
        // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
        delete process.env[key];
    }

    public static reset(): void {
        for (const key of Object.keys(process.env) as Environment.Keys[]) {
            this.unset(key);
        }
    }

    public static check(): void {
        const optionals = [Environment.Keys.Port, Environment.Keys.NodeEnv];

        for (const key of Object.values(Environment.Keys)) {
            if (optionals.includes(key)) {
                continue;
            }

            const exists = this.exists(key);

            if (!exists) {
                throw new DomainError(`Missing env "${key}", check if it was exported or set in the .env`);
            }
        }
    }

    public static load(file?: string): void;
    public static load(checkIfExistsAllEnvs?: boolean): void;
    public static load(file?: string, checkIfExistsAllEnvs?: boolean): void;
    public static load(): void {
        const file = typeof arguments[0] === 'string' ? arguments[0] : '.env';
        const checkIfExistsAllEnvs = typeof arguments[0] === 'boolean' ? arguments[0] : arguments[1] ?? true;

        config({ path: file });

        if (checkIfExistsAllEnvs) {
            this.check();
        }
    }
}

export namespace Environment {
    export enum Keys {
        Port = 'PORT',
        NodeEnv = 'NODE_ENV',

        PostgresHost = 'POSTGRES_HOST',
        PostgresUser = 'POSTGRES_USER',
        PostgresPassword = 'POSTGRES_PASSWORD',
        PostgresDatabase = 'POSTGRES_DATABASE',
    }
}
