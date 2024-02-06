export interface IProduct {
    id: number;
    name: string;
    quantityInStock: number;
    price: number;
}

export interface ICreateProduct {
    name: string;
    quantityInStock: number;
    price: number;
}

export interface IEditProduct {
    id: number;
    name: string;
    quantityInStock: number;
    price: number;
}