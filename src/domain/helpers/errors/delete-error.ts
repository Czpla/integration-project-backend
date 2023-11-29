import { DomainError } from './domain-error';

export class DeleteError extends DomainError {
    constructor(message: string) {
        super(`Error in delete: ${message}`);
    }
}
