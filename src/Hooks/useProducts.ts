import { useQuery } from "@tanstack/react-query";
import type { Products } from "../Api/types/Products.types";
import { PRODUCT_KEYS } from "../ApiQuery/Keys";
import { fetchAllProducts } from "../ApiQuery/Products.query";

export function useProducts() {
    return useQuery<Products[]>({
        queryKey: PRODUCT_KEYS.allProduct(),
        queryFn: fetchAllProducts,
        staleTime: 1000 * 60 * 5,
    });
}