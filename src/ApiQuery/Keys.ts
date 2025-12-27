export const PRODUCT_KEYS = {
    allProduct: (page: number, perPage: number, category?: string) => ["products", "all", page, perPage, category || "none"] as const,
    categories: () => ["products", "categories"] as const,
    reviews: () => ["products", "reviews"] as const
}