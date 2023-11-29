import { DomainError } from './domain-error';

export class UpdateError extends DomainError {
    constructor(message: string) {
        super(`Error in update: ${message}`);
    }
}
