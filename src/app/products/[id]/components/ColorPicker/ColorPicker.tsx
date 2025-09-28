/** @format */

"use client";

import { useProduct } from "../../providers/ProductProvider";
import styles from "./ColorPicker.module.scss";

const ColorPicker = () => {
  const { product, selectedColor, handleImageOrColorChange } = useProduct();

  return (
    <div className={styles.colorsAndHeadingWrapper}>
      <span>Color: {selectedColor}</span>
      <div className={styles.colorsWrapper}>
        {product.available_colors.map((color, idx) => (
          <div
            key={color}
            onClick={() => handleImageOrColorChange(idx)}
            className={`${styles.colorWrapper} ${
              color === selectedColor ? styles.activeColor : ""
            }`}>
            <div className={styles.color} style={{ backgroundColor: color }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorPicker;
