/* eslint-disable no-console */
import { type LogErrorRepository } from '@business/repositories';

export class LogConsoleRepository implements LogErrorRepository {
    public static readonly instance = new LogConsoleRepository();

    public async logError(stack: string): Promise<void> {
        console.error(stack);
    }
}
