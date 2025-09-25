import { baseFetch } from "../api/base/base-fetch";
import { IProduct } from "../types/interfaces/product.interface";

class ProductsService {
    public async getProducts(priceFrom?: string, priceTo?: string, sort?: string, page?: string) {
         const params = new URLSearchParams();

         if (priceFrom) {
          params.append('filter[price_from]', priceFrom)
         }

         if (priceTo) {
          params.append('filter[price_to]', priceTo)
         }

         if (sort) {
          params.append('sort', sort);
         }

         if (page) {
          params.append('page', page)
         }


  return await baseFetch<IProduct[], true>('products?' + params.toString());
    }
}

export const productsService = new ProductsService();