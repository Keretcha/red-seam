/** @format */

import { ISingleProductInterface } from "@/shared/types/interfaces/single-product.interface";
import styles from "./SingleProduct.module.scss";

const SingleProduct = (props: ISingleProductInterface) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {props.id}
        {props.name}
        {props.images}
        {props.price}
      </div>
    </div>
  );
};

export default SingleProduct;
