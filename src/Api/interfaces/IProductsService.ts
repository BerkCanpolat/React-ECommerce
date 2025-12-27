import type { ProductCategory, ProductsResponse } from "../types/Products.types";

export interface IProductsService {
    getIProducts(page: number, perPage: number, category?: string): Promise<ProductsResponse>
    getICategories(): Promise<ProductCategory[]>;
}