/** @format */

import { baseFetch } from "../api/base/base-fetch";
import { ICheckoutRequest } from "../types/interfaces/checkout.interface";
import { ISingleProduct } from "../types/interfaces/single-product.interface";

class CartService {
  public async addProductToCart(
    productId: number,
    color: string,
    quantity: number,
    size: string
  ) {
    return await baseFetch<void>(`cart/products/${productId}`, {
      method: "POST",
      body: JSON.stringify({
        color,
        quantity,
        size,
      }),
      next: {
        tags: ["cart-products"],
      },
    });
  }

  public async getCart() {
    return await baseFetch<ISingleProduct[]>("cart");
  }

  public async removeProductFromCart(
    productId: number,
    size: string,
    color: string
  ) {
    return await baseFetch(`cart/products/${productId}`, {
      method: "DELETE",
      body: JSON.stringify({
        size,
        color,
      }),
    });
  }

  public async updateProductQuantityInCart(
    productId: number,
    size: string,
    color: string,
    quantity: number,
  ) {
    return await baseFetch(`cart/products/${productId}`, {
      method: "PATCH",
      body: JSON.stringify({
        size,
        color,
        quantity,
      }),
    });
  }

  public async checkoutCart(data: ICheckoutRequest) {
    return await baseFetch('cart/checkout', {
      method: 'POST',
      body: JSON.stringify(data),
    })
  }
}

export const cartService = new CartService();


