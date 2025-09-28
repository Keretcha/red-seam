/** @format */

"use client";
import { FC } from "react";
import styles from "./RemoveButton.module.scss";
import { removeProductFromCart } from "@/shared/actions/cart.actions";

interface Props {
  productId: number;
  size: string;
  color: string;
}

const RemoveButton: FC<Props> = (props) => {
  const onClick = async () => {
    await removeProductFromCart(props.productId, props.size, props.color);
  };

  return (
    <div className={styles.delete} onClick={onClick}>
      <span>Remove</span>
    </div>
  );
};

export default RemoveButton;
