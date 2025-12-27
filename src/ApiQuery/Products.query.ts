import { ServiceManager } from "../Api/manager/serviceManager"

export const fetchAllProducts = async (page: number, perPage: number, category?: string) => {
    return ServiceManager.products.getIProducts(page, perPage, category);
}

export const fetchCategories = async () => {
    return ServiceManager.products.getICategories();
}

export const fetchReviews = async () => {
    return ServiceManager.reviews.getIReviews();
}