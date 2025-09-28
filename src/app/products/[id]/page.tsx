/** @format */

import styles from "./page.module.scss";
import Image from "next/image";
import { Select, SelectItem } from "@heroui/select";
import Button from "@/shared/components/Button/Button";
import WhiteCartICon from "@/shared/components/Icons/WhiteCartICon";
import { NextPage } from "next";
import { productsService } from "@/shared/services/products.service";
import QuantityPicker from "./components/QuantityPicker/QuantityPicker";
import Images from "./components/Images/Images";
import { ProductProvider } from "./providers/ProductProvider";
import ColorPicker from "./components/ColorPicker/ColorPicker";
import SizePicker from "./components/SizePicker/SizePicker";
import Description from "./components/Description/Description";
import AddToCartButton from "./components/AddToCartButton/AddToCartButton";
import { getUser } from "@/shared/actions/user.actions";

const SingleProductPage: NextPage<{ params: Promise<{ id: number }> }> = async (
  props
) => {
  const { id } = await props.params;
  const [product, user] = await Promise.all([
    productsService.getProduct(id),
    getUser(),
  ]);

  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(product.data.price);

  return (
    <ProductProvider product={product.data}>
      <div className={styles.container}>
        <div className={styles.containerWrapper}>
          <div className={styles.heading}>
            <h4>Listing / Product</h4>
          </div>
          <div className={styles.contentWrapper}>
            <Images images={product.data.images} />
            <div className={styles.productDetailsWrapper}>
              <div className={styles.productDetails}>
                <div className={styles.headingWrapper}>
                  <h1>{product.data.name}</h1>
                  <span>{formattedPrice}</span>
                </div>
                <div className={styles.optionsWrapper}>
                  <ColorPicker />
                  <SizePicker />
                  <QuantityPicker />
                </div>
                <AddToCartButton user={user} />
              </div>
              <Description />
            </div>
          </div>
        </div>
      </div>
    </ProductProvider>
  );
};

export default SingleProductPage;
