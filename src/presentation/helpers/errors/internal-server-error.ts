export class InternalServerError extends Error {
    constructor(stack?: string) {
        super('Internal server error');

        this.stack = stack;
        this.name = 'internal-server-error';
    }
}
