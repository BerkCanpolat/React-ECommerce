import { ProductApi } from "../Endpoints/Products.api";
import type { IProductsService } from "../interfaces/IProductsService";
import type { ProductCategory, ProductsResponse } from "../types/Products.types";
import { BaseService } from "./BaseService";

export class ProductService extends BaseService implements IProductsService {

    constructor() {
        super("products");
    }

    
    async getIProducts(page: number = 1, perPage: number = 4): Promise<ProductsResponse> {
        try {
            return await ProductApi.getProducts(page, perPage);
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
}