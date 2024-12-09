import { gender_options } from "./type/gender_options";

export enum user_types {
    client = "client",
    professional = "professional",
    clientAdmin = "clientAdmin",
}

interface ClientIds {
    mongo_id: string;
    client_id: number;
}

export interface AuthClient {
    id: string;
    user_id: number;
    name: string;
    last_name: string;
    email: string;
    phone?: string;
    password: string;
    roles: user_types[];
    gender: gender_options;
    current_client?: ClientIds;
    deleted_at?: Date;
    last_login?: Date;
    created_at: Date;
    updated_at: Date;
}