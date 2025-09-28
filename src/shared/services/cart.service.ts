/** @format */

import { baseFetch } from "../api/base/base-fetch";

class CartService {
  public async addProductToCart(
    productId: number,
    color: string,
    quantity: number,
    size: string
  ) {
    return baseFetch<void>(`cart/products/${productId}`, {
      method: "POST",
      body: JSON.stringify({
        color,
        quantity,
        size,
      }),
    });
  }
}

export const cartService = new CartService();
