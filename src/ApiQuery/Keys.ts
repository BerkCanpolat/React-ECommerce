export const PRODUCT_KEYS = {
    allProduct: (page: number, perPage: number) => ["products", "all", page, perPage] as const,
    categories: () => ["products", "categories"] as const,
    reviews: () => ["products", "reviews"] as const
}