import type { ProductsResponse } from "../types/Products.types";

export interface IProductsService {
    getIProducts(page: number): Promise<ProductsResponse>
}