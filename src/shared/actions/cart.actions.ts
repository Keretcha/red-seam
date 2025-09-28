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
  revalidateTag("cart");
  return res;
};
