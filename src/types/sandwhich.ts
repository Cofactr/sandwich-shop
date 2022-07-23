
export type SandwichStateProps = {
    error: object | string | null;
    meats: AddOn[];
    toppings: AddOn[];
    sandwiches: Sandwich[];
};

export type AddOn = {
    id: string;
    name: string;
}

export type Sandwich = {
    id: string;
    name: string;
    price: number;
    expires_on: string;
    stack_size: number;
    meat: AddOn;
    toppings: AddOn[];
    toasted: boolean;
    notes: string | null;
    created_at: string;
};

export type CreateSandwich = {
    name: string;
    price: number;
    expires_on: string;
    stack_size?: number;
    meat: string;
    toasted?: boolean;
    notes?: string | null;
};

export type UpdateSandwich = {
    name?: string;
    price?: number;
    expires_on?: string;
    stack_size?: number;
    meat?: string;
    toasted?: boolean;
    notes?: string | null;
};
