import { gender_options } from "./type/gender_options";

export interface Patient {
    patient_id: number;
    client_fk: number;
    company_fk: number;
    updated_by: number;
    name: string;
    last_name: string;
    healthcare_provider?: string;
    gender: gender_options;
    age?: number;
    phone?: string;
    note?: string;
    deleted_at?: Date;
    updated_at: Date;
    created_at: Date;
}