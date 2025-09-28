/** @format */

import { IProduct } from "./product.interface";

export interface ISingleProduct extends IProduct {
  brand: {
    id: number;
    name: string;
    image: string;
  };
  total_price: number;
  quantity: number;
  color: string;
  size: string;
}
