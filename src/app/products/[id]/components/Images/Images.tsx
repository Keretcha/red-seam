/** @format */
"use client";
import { FC } from "react";
import styles from "./Images.module.scss";
import Image from "next/image";
import { useProduct } from "../../providers/ProductProvider";

interface Props {
  images: string[];
}

const Images: FC<Props> = (props) => {
  const { handleImageOrColorChange, selectedImage } = useProduct();

  return (
    <div className={styles.imagesWrapper}>
      <div className={styles.images}>
        {props.images.map((image, idx) => (
          <Image
            key={image}
            onClick={() => handleImageOrColorChange(idx)}
            src={image}
            alt={"singleProduct"}
            width={121}
            height={161}
          />
        ))}
      </div>
      <div className={styles.product}>
        <Image src={selectedImage} alt={"product"} width={703} height={937} />
      </div>
    </div>
  );
};

export default Images;
