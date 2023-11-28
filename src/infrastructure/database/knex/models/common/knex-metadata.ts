import { Metadata } from '@/domain/entities/common/metadata';

export class KnexMetadata {
    public id!: string;
    public created_by!: string | null;
    public created_at!: Date;
    public updated_by!: string | null;
    public updated_at!: Date;
    public deleted_by!: string | null;
    public deleted_at!: Date | null;

    constructor(params: KnexMetadata.Params) {
        this.id = params.id;
        this.created_by = params.created_by;
        this.created_at = params.created_at;
        this.updated_by = params.updated_by;
        this.updated_at = params.updated_at;
        this.deleted_by = params.deleted_by;
        this.deleted_at = params.deleted_at;
    }

    public toEntity(): Metadata {
        return new Metadata({
            id: this.id,
            createdBy: this.created_by,
            createdAt: this.created_at,
            updatedBy: this.updated_by,
            updatedAt: this.updated_at,
            deletedBy: this.deleted_by,
            deletedAt: this.deleted_at,
        });
    }

    /**
     * @description O "created_at" não é retornado pois é gerado automaticamente pelo banco de dados e não deve ser alterado
     */
    public toJSON() {
        const props: Record<string, any> = {
            id: this.id,
        };

        if (this.created_by) {
            props.created_by = this.created_by;
        }

        if (this.updated_by) {
            props.updated_by = this.updated_by;
        }

        if (this.updated_at) {
            props.updated_at = this.updated_at;
        }

        if (this.deleted_by) {
            props.deleted_by = this.deleted_by;
        }

        if (this.deleted_at) {
            props.deleted_at = this.deleted_at;
        }

        return props;
    }

    public static fromEntity(metadata: Metadata): KnexMetadata {
        return new KnexMetadata({
            id: metadata.id,
            created_by: metadata.createdBy,
            created_at: metadata.createdAt,
            updated_by: metadata.updatedBy,
            updated_at: metadata.updatedAt,
            deleted_by: metadata.deletedBy,
            deleted_at: metadata.deletedAt,
        });
    }

    public static fromJSON(json: any): KnexMetadata {
        return new KnexMetadata({
            id: json.id,
            created_by: json.created_by,
            created_at: json.created_at,
            updated_by: json.updated_by,
            updated_at: json.updated_at,
            deleted_by: json.deleted_by,
            deleted_at: json.deleted_at,
        });
    }
}

export namespace KnexMetadata {
    export const FIELDS = ['id', 'created_by', 'created_at', 'updated_by', 'updated_at', 'deleted_by', 'deleted_at'];

    export interface Params {
        id: string;
        created_by: string | null;
        created_at: Date;
        updated_by: string | null;
        updated_at: Date;
        deleted_by: string | null;
        deleted_at: Date | null;
    }
}
