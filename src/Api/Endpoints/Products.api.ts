import { API_CONFIG } from "../http/config";
import { HttpClient } from "../http/HttpClient";
import type { Products, ProductsResponse, ReviewsResponse } from "../types/Products.types";

const client = new HttpClient(API_CONFIG.ECOMMERCE_BASE);

export const ProductApi = {
  getProducts: (page: number = 1, perPage: number = 4, category?: string) =>
    client.get<ProductsResponse>("products", { page, perPage, category: category || undefined }),

  getReviews: () => client.get<ReviewsResponse>("reviews"),

  getProductById: (id: string | number) => client.get<Products>(`products/${id}`)
};
