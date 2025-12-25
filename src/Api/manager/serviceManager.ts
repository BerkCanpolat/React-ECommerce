import { ProductService } from "../services/Products.services";
import { ReviewService } from "../services/Review.services";

export const ServiceManager = {
    products: new ProductService(),
    reviews: new ReviewService()
} as const;