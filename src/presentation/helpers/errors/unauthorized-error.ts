export class UnauthorizedError extends Error {
    constructor() {
        super('Unauthorized');

        this.name = 'unauthorized-error';
    }
}
