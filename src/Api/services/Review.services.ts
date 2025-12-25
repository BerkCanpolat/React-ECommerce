import { ProductApi } from "../Endpoints/Products.api";
import type { IReviewService } from "../interfaces/IReviewService";
import type { Reviews } from "../types/Products.types";
import { BaseService } from "./BaseService";

export class ReviewService extends BaseService implements IReviewService{
    constructor() {
        super("reviews");
    }

    async getIReviews(): Promise<Reviews[]> {
        try {
            const response = await ProductApi.getReviews();
            return response.data;
        } catch (error) {
            this.handleError(error);
        }
    }


}