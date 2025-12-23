import { ServiceManager } from "../Api/manager/serviceManager"

export const fetchAllProducts = async (page: number) => {
    return ServiceManager.products.getIProducts(page);
}