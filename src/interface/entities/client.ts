export interface Client {
    client_id: number;
    client_fk?: number;
    mongo_id: string;
    name: string;
    last_name: string;
    profile: string;
    deleted_at?: Date;
    updated_at: Date;
    created_at: Date;
}