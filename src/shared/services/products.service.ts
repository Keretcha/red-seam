import { baseFetch } from "../api/base/base-fetch";

class ProductsService {
    public async getProducts(priceFrom: string, priceTo: string) {
         const params = new URLSearchParams({
    "filter[price_from]": priceFrom,
    "filter[price_to]": priceTo,
  });

  console.log(params.toString());

  return await baseFetch<any>('products?' + params.toString());
    }
}

export const productsService = new ProductsService();