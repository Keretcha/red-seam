/** @format */
"use client";
import { createContext, PropsWithChildren, useContext, useState } from "react";
import { ISingleProduct } from "@/shared/types/interfaces/single-product.interface";

interface IProductContext {
  product: ISingleProduct;
  selectedImage: string;
  selectedColor: string;
  handleImageOrColorChange: (index: number) => void;
  selectedSize: string;
  setSelectedSize: (size: string) => void;
}

const ProductContext = createContext<IProductContext | undefined>(undefined);

interface Props extends PropsWithChildren {
  product: ISingleProduct;
}

export const ProductProvider = (props: Props) => {
  const [selectedImage, setSelectedImage] = useState(props.product.images[0]);
  const [selectedColor, setSelectedColor] = useState(
    props.product.available_colors[0]
  );
  const [selectedSize, setSelectedSize] = useState(props.product.size);

  const handleImageOrColorChange = (imageIndex: number) => {
    setSelectedImage(props.product.images[imageIndex]);
    setSelectedColor(props.product.available_colors[imageIndex]);
  };

  return (
    <ProductContext.Provider
      value={{
        product: props.product,
        selectedImage,
        selectedColor,
        handleImageOrColorChange,
        selectedSize,
        setSelectedSize
      }}>
      {props.children}
    </ProductContext.Provider>
  );
};

export function useProduct() {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProduct must be used within a ProductProvider");
  }
  return context;
}
