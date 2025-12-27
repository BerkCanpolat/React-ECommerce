import { useQuery } from "@tanstack/react-query";
import type { ProductsResponse, Reviews } from "../Api/types/Products.types";
import { PRODUCT_KEYS } from "../ApiQuery/Keys";
import { fetchAllProducts, fetchCategories, fetchReviews } from "../ApiQuery/Products.query";

export function useProducts(page: number, perPage: number, category?: string) {
    return useQuery<ProductsResponse>({
        queryKey: PRODUCT_KEYS.allProduct(page, perPage, category),
        queryFn: () => fetchAllProducts(page, perPage, category),
        staleTime: 1000 * 60 * 5,
        placeholderData: (previousData) => previousData
    });
}

export function useCategories() {
    return useQuery<string[]>({
        queryKey: PRODUCT_KEYS.categories(),
        queryFn: fetchCategories,
        staleTime: 1000 * 60 * 30
    })
}

export function useReview() {
    return useQuery<Reviews[]>({
        queryKey: PRODUCT_KEYS.reviews(),
        queryFn: fetchReviews,
        staleTime: 1000 * 60 * 30
    });
}