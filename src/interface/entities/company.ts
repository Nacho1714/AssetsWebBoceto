export interface Company {
    company_id: number;
    client_fk: number;
    updated_by: number;
    name: string;
    cuit?: string;
    note?: string;
    deleted_at?: Date;
    updated_at: Date;
    created_at: Date;
}