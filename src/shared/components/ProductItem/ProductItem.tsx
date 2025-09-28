/** @format */

import Image from "next/image";
import styles from "./ProductItem.module.scss";
import PlusIcon from "../Icons/PlusIcon";
import MinusIcon from "../Icons/MinusIcon";
import { FC } from "react";
import RemoveButton from "./components/RemoveButton/RemoveButton";
import QuantityPicker from "./components/QuantityPicker/QuantityPicker";

interface Props {
  id: number;
  title: string;
  size: string;
  color: string;
  price: number;
  quantity: number;
  imageSrc: string;
}

const ProductItem: FC<Props> = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image
          src={props.imageSrc}
          alt={"product"}
          width={100}
          height={134}
          className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <div className={styles.detailsWrapper}>
          <div className={styles.details}>
            <h3>{props.title}</h3>
            <span>{props.color}</span>
            <span className={styles.size}>{props.size}</span>
          </div>
          <div className={styles.price}>
            <span>${props.price}</span>
          </div>
        </div>
        <div className={styles.quantityWrapper}>
          <QuantityPicker
            size={props.size}
            color={props.color}
            productId={props.id}
            quantity={props.quantity}
          />
          <RemoveButton
            productId={props.id}
            color={props.color}
            size={props.size}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
