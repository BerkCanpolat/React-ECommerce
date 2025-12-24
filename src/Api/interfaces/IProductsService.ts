import type { ProductCategory, ProductsResponse } from "../types/Products.types";

export interface IProductsService {
    getIProducts(page: number, perPage: number): Promise<ProductsResponse>
    getICategories(): Promise<ProductCategory[]>;
}