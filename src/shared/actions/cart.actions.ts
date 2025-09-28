/** @format */

"use server";

import { revalidateTag } from "next/cache";
import { cartService } from "../services/cart.service";

export const addProductToCart = async (
  productId: number,
  color: string,
  quantity: number,
  size: string
) => {
  const res = await cartService.addProductToCart(
    productId,
    color,
    quantity,
    size
  );

  revalidateTag("cart-products");
  return res;
};

export const removeProductFromCart = async (
  productId: number,
  size: string,
  color: string
) => {
  const res = await cartService.removeProductFromCart(productId, size, color);

  if (res.ok) {
    revalidateTag("cart-products");
  }

  return res;
};

export const updateProductQuantityInCart = async (
  productId: number,
  size: string,
  color: string,
  quantity: number
) => {
  const res = await cartService.updateProductQuantityInCart(
    productId,
    size,
    color,
    quantity
  );

  if (res.ok) {
    revalidateTag("cart-products");
  }

  return res;
};
