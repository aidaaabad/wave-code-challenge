export type Customer = {
    id: string;
    name: string;
    email: string;
    channel: 'website' | 'email' | 'phone' | 'word-of-mouth' | 'other' | 'unknown';
    address?: string;
    postal?: string;
    city?: string;
    province?: string;
};

export interface CustomerResponse {
    customers: Customer[];
}