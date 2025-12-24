import { useQuery } from "@tanstack/react-query";
import type { ProductsResponse } from "../Api/types/Products.types";
import { PRODUCT_KEYS } from "../ApiQuery/Keys";
import { fetchAllProducts, fetchCategories } from "../ApiQuery/Products.query";

export function useProducts(page: number, perPage: number) {
    return useQuery<ProductsResponse>({
        queryKey: PRODUCT_KEYS.allProduct(page, perPage),
        queryFn: () => fetchAllProducts(page, perPage),
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