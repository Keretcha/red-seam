/** @format */

import { baseFetch } from "../api/base/base-fetch";
import { IProduct } from "../types/interfaces/product.interface";
import { ISingleProduct } from "../types/interfaces/single-product.interface";

class ProductsService {
  public async getProducts(
    priceFrom?: string,
    priceTo?: string,
    sort?: string,
    page?: string
  ) {
    const params = new URLSearchParams();

    if (priceFrom) {
      params.append("filter[price_from]", priceFrom);
    }

    if (priceTo) {
      params.append("filter[price_to]", priceTo);
    }

    if (sort) {
      params.append("sort", sort);
    }

    if (page) {
      params.append("page", page);
    }

    return await baseFetch<IProduct[], true>("products?" + params.toString());
  }

  public async getProduct(id: number) {
    return await baseFetch<ISingleProduct>(`products/${id}`)
  }
}

export const productsService = new ProductsService();
