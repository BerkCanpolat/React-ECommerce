import { ProductApi } from "../Endpoints/Products.api";
import type { IProductsService } from "../interfaces/IProductsService";
import type { ProductCategory, Products, ProductsResponse } from "../types/Products.types";
import { BaseService } from "./BaseService";

export class ProductService extends BaseService implements IProductsService {

    constructor() {
        super("products");
    }
    
    
    async getIProducts(page: number = 1, perPage: number = 4, category?: string): Promise<ProductsResponse> {
        try {
            return await ProductApi.getProducts(page, perPage, category);
        } catch (error) {
            this.handleError(error);
        }
    }
    
    
    
    async getICategories(): Promise<ProductCategory[]> {
        try {
            const response = await ProductApi.getProducts(1,20);
            
            const categories = Array.from(new Set(response.data.map((product) => product.category)));
            
            return categories;
        } catch (error) {
            this.handleError(error);
        }
    }


    async getIProductById(id: string | number): Promise<Products> {
        try {
            return await ProductApi.getProductById(id);
        } catch (error) {
            this.handleError(error);
        }
    }
}