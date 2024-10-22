export interface Customer {
    id: string;
    name: string;
    address: string;
    phoneNumber?: string;
}

export type CustomerWithoutId = Omit<Customer, "id">;
