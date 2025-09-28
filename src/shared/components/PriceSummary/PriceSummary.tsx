/** @format */

"use client";

import { ISingleProduct } from "@/shared/types/interfaces/single-product.interface";
import { FC, useMemo } from "react";
import styles from "./PriceSummary.module.scss";

interface Props {
  products: ISingleProduct[];
}

const PriceSummary: FC<Props> = (props) => {
  const totalPrice = useMemo(
    () =>
      props.products.reduce((acc, curr) => {
        acc += curr.price * curr.quantity;
        return acc;
      }, 0),
    [props.products]
  );

  const deliveryPrice = 5;

  return (
    <div className={styles.container}>
      <div className={styles.price}>
        <span>Items subtotal</span>
        <span>$ {totalPrice}</span>
      </div>
      <div className={styles.price}>
        <span>Delivery</span>
        <span>$ {deliveryPrice}</span>
      </div>
      <div className={styles.totalPrice}>
        <span>Total</span>
        <span>${totalPrice + deliveryPrice}</span>
      </div>
    </div>
  );
};

export default PriceSummary;
