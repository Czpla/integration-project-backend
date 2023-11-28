export class PageViewModel<T> {
    public data: T[];
    public total: number;

    constructor(params: PageViewModel.Params<T>) {
        this.data = params.data;
        this.total = params.total;
    }

    public toJSON() {
        return {
            data: this.data,
            total: this.total,
        };
    }
}

export namespace PageViewModel {
    export interface Params<T> {
        data: T[];
        total: number;
    }
}
