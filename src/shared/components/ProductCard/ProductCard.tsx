/** @format */

import { FC } from "react";
import styles from "./ProductCard.module.scss";
import Image from "next/image";

interface Props {
  title: string;
  price: number;
  imageUrl: string;
}

const ProductCard: FC<Props> = (props) => {
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(props.price);

  return (
    <div className={styles.container}>
      <Image
        src={props.imageUrl}
        alt={`${props.title} - product image`}
        width={412}
        height={549}
      />
      <div className={styles.infoWrapper}>
        <h3>{props.title}</h3>
        <p>{formattedPrice}</p>
      </div>
    </div>
  );
};

export default ProductCard;
