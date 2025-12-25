import { API_CONFIG } from "../http/config";
import { HttpClient } from "../http/HttpClient";
import type { ProductsResponse, ReviewsResponse } from "../types/Products.types";

const client = new HttpClient(API_CONFIG.ECOMMERCE_BASE);

export const ProductApi = {
  getProducts: (page: number = 1, perPage: number = 4) =>
    client.get<ProductsResponse>("products", { page, perPage }),

  getReviews: () => client.get<ReviewsResponse>("reviews")
};
