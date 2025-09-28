/** @format */

"use client";

import { useProduct } from "../../providers/ProductProvider";
import styles from "./Description.module.scss";
import Image from "next/image";

const Description = () => {
  const { product } = useProduct();

  return (
    <div className={styles.container}>
      <div className={styles.headingAndBrandWrapper}>
        <h3>Details</h3>
        <Image
          width={109}
          height={61}
          src={product.brand.image}
          alt={product.brand.name + " Image"}
        />
      </div>
      <div className={styles.descriptionWrapper}>
        <div>
          <span>Brand: {product.brand.name}</span>
        </div>
        <p>{product.description}</p>
      </div>
    </div>
  );
};

export default Description;
