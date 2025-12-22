import { ServiceManager } from "../Api/manager/serviceManager"

export const fetchAllProducts = async () => {
    return ServiceManager.products.getIProducts();
}