enum urgency_options {
    high = 'high',
    medium = 'medium',
    low = 'low'
}

export interface Claim {
    claim_id: number;
    detail_fk: number;
    client_fk: number;
    updated_by: number;
    cause: string;
    urgency: urgency_options;
    reported_date: Date;
    deleted_at?: Date;
    updated_at: Date;
    created_at: Date;
}