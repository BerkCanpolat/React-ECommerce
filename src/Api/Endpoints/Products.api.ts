import { API_CONFIG } from "../http/config";
import { HttpClient } from "../http/HttpClient";
import type { ProductsResponse } from "../types/Products.types";

const client = new HttpClient(API_CONFIG.ECOMMERCE_BASE);

export const ProductApi = {
    getProducts: () => client.get<ProductsResponse>("products")
};