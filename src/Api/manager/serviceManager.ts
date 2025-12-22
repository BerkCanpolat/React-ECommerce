import { ProductService } from "../services/Products.services";

export const ServiceManager = {
    products: new ProductService()
} as const;