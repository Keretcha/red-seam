/** @format */

"use client";
import { FC, useEffect, useState } from "react";
import styles from "./QuantityPicker.module.scss";
import MinusIcon from "@/shared/components/Icons/MinusIcon";
import PlusIcon from "@/shared/components/Icons/PlusIcon";
import { updateProductQuantityInCart } from "@/shared/actions/cart.actions";

interface Props {
  quantity: number;
  productId: number;
  size: string;
  color: string;
}

const QuantityPicker: FC<Props> = (props) => {
  const [quantity, setQuantity] = useState(props.quantity);

  const isDecreaseButtonDisabled = quantity <= 1;

  const onIncreaseQuantity = () => {
    setQuantity((quantity) => quantity + 1);
  };

  const onDecreaseQuantity = () => {
    if (isDecreaseButtonDisabled) return;
    setQuantity((quantity) => quantity - 1);
  };

  useEffect(() => {
    updateProductQuantityInCart(
      props.productId,
      props.size,
      props.color,
      quantity
    );
  }, [quantity]);

  return (
    <div className={styles.quantity}>
      <div
        className={`${
          isDecreaseButtonDisabled ? styles.disabledQuantityButton : ""
        }`}
        onClick={onDecreaseQuantity}>
        <MinusIcon />
      </div>
      <span>{props.quantity}</span>
      <div onClick={onIncreaseQuantity}>
        <PlusIcon />
      </div>
    </div>
  );
};

export default QuantityPicker;
