export interface CompanyHasTreatment {
    client_fk: number;
    company_fk: number;
    treatment_fk: number;
    value: number;
    updated_by: number;
    updated_at: Date;
    created_at: Date;
}