import type { Reviews } from "../types/Products.types";

export interface IReviewService {
    getIReviews(): Promise<Reviews[]>;
}