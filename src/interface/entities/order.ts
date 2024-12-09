export interface Order {
    order_id: number;
    client_fk: number;
    updated_by: number;
    patient_fk: number;
    company_fk: number;
    treatment_fk: number;
    frequency: number;
    diagnosis?: string;
    deleted_at?: Date;
    updated_at: Date;
    created_at: Date;
}

export interface OrderDetail {
    detail_id: number;
    order_fk: number;
    client_fk: number;
    professional_fk?: number;
    updated_by: number;
    start_date: Date;
    finish_date: Date;
    total_sessions: number;
    sessions: number;
    coinsurance: number;
    value: number;
    cost: number;
    started_at?: Date;
    finished_at?: Date;
    requirements?: string;
    updated_at: Date;
    created_at: Date;
}