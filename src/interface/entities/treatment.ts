interface Treatment {
    treatment_id: number;
    client_fk: number;
    updated_by: number;
    name: string;
    abbreviation: string;
    description?: string;
    deleted_at?: Date;
    updated_at: Date;
    created_at: Date;
}