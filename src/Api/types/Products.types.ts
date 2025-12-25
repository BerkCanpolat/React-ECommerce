export type ProductCategory = string;
export type ProductSize = "S" | "M" | "L";

export interface ProductsResponse {
    data: Products[];
    totalProducts: number,
    totalPages: number,
    currentPage: number,
    perPage: number,
}

export interface Products {
    _id: number,
    title: string,
    isNew: boolean,
    oldPrice: string,
    price: number,
    discountedPrice: number,
    description: string,
    category: string,
    type: string,
    stock: number,
    brand: string,
    size: ProductSize[],
    image: string,
    rating: number
};

export interface ReviewsResponse {
    data: Reviews[];
}

export interface Reviews {
    _id: number,
    comment: string
}