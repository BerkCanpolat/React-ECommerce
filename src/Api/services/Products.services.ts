import { ProductApi } from "../Endpoints/Products.api";
import type { IProductsService } from "../interfaces/IProductsService";
import type { Products } from "../types/Products.types";
import { BaseService } from "./BaseService";

export class ProductService extends BaseService implements IProductsService {

    constructor() {
        super("products");
    }

    async getIProducts(): Promise<Products[]> {
        try {
            const response = await ProductApi.getProducts();
            return response.data;
        } catch (error) {
            this.handleError(error);
        }
    }

}