/* eslint-disable no-console */

import { type LogErrorRepository } from '@/business/protocols';

export class LogConsoleRepository implements LogErrorRepository {
    public static readonly instance = new LogConsoleRepository();

    public async logError(stack: string): Promise<void> {
        console.error(stack);
    }
}
