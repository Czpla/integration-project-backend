export class DomainError extends Error {
    constructor(message: string) {
        super(message);

        this.name = 'domain-error';
    }

    public toJSON(): Record<string, any> {
        return {
            name: this.name,
            message: this.message,
        };
    }
}
