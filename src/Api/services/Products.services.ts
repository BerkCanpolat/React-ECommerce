import { ProductApi } from "../Endpoints/Products.api";
import type { IProductsService } from "../interfaces/IProductsService";
import type { ProductsResponse } from "../types/Products.types";
import { BaseService } from "./BaseService";

export class ProductService extends BaseService implements IProductsService {

    constructor() {
        super("products");
    }

    async getIProducts(page: number = 1): Promise<ProductsResponse> {
        try {
            return await ProductApi.getProducts(page);
        } catch (error) {
            this.handleError(error);
        }
    }

}