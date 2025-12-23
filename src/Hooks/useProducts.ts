import { useQuery } from "@tanstack/react-query";
import type { ProductsResponse } from "../Api/types/Products.types";
import { PRODUCT_KEYS } from "../ApiQuery/Keys";
import { fetchAllProducts } from "../ApiQuery/Products.query";

export function useProducts(page: number) {
    return useQuery<ProductsResponse>({
        queryKey: PRODUCT_KEYS.allProduct(page),
        queryFn: () => fetchAllProducts(page),
        staleTime: 1000 * 60 * 5,
        placeholderData: (previousData) => previousData
    });
}