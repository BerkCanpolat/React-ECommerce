import type { Products } from "../types/Products.types";

export interface IProductsService {
    getIProducts(): Promise<Products[]>
}