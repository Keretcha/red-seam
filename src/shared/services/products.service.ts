import { baseFetch } from "../api/base/base-fetch";

class ProductsService {
    public async getProducts(priceFrom?: string, priceTo?: string, sort?: string) {
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

  return await baseFetch<any>('products?' + params.toString());
    }
}

export const productsService = new ProductsService();