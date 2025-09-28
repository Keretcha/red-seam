/** @format */

"use client";
import { useProduct } from "../../providers/ProductProvider";
import styles from "./SizePicker.module.scss";

const SizePicker = () => {
  const { product, selectedSize, setSelectedSize } = useProduct();

  return (
    <div className={styles.sizeWrapper}>
      <div className={styles.sizeHeading}>
        <span>Size: {selectedSize}</span>
      </div>
      <div className={styles.sizes}>
        {product.available_sizes.map((size) => (
          <div
            onClick={() => setSelectedSize(size)}
            className={`${styles.size} ${
              selectedSize === size ? styles.activeSize : ""
            }`}>
            {size}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SizePicker;
