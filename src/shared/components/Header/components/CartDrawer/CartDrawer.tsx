/** @format */
"use client";

import { IProduct } from "@/shared/types/interfaces/product.interface";
import { Drawer, DrawerBody, DrawerContent, DrawerHeader } from "@heroui/react";
import styles from "./CartDrawer.module.scss";
import Button from "../../../Button/Button";
import { useState } from "react";
import CartIcon from "@/shared/components/Icons/CartIcon";
import CloseModalIcon from "@/shared/components/Icons/CloseModalIcon";
import Image from "next/image";
import Link from "next/link";
import ProductItem from "@/shared/components/ProductItem/ProductItem";
import { ISingleProduct } from "@/shared/types/interfaces/single-product.interface";
import PriceSummary from "@/shared/components/PriceSummary/PriceSummary";
import { useRouter } from "next/navigation";

export interface Props {
  products?: ISingleProduct[];
}

const Cart = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const onClick = () => {
    setIsOpen((prevState) => !prevState);
  };

  const onCheckoutButtonClick = () => {
    router.push("/checkout");
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <div className={styles.cartIconWrapper} onClick={onClick}>
        <CartIcon />
      </div>
      <Drawer
        className={styles.drawerContainer}
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        hideCloseButton>
        <DrawerContent className={styles.drawerContent}>
          <DrawerHeader className={styles.drawerHeader}>
            <div>Shopping Cart ({props.products?.length ?? 0})</div>
            <div className={styles.xIcon} onClick={onClick}>
              <CloseModalIcon width={32} height={32} />
            </div>
          </DrawerHeader>
          <DrawerBody
            className={props.products?.length ? styles.mainWrapper : ""}>
            {!props.products?.length && (
              <div className={styles.container}>
                <Image
                  src={"/images/cart-image.png"}
                  alt='cartImage'
                  width={170}
                  height={135}
                />
                <div className={styles.cartWrapper}>
                  <h3>Ooops!</h3>
                  <span>You’ve got nothing in your cart just yet...</span>
                  <div className={styles.buttonWrapper}>
                    <Button as={Link} href='/' onPress={() => setIsOpen(false)}>
                      Start Shopping
                    </Button>
                  </div>
                </div>
              </div>
            )}
            {!!props.products?.length &&
              props.products.map((product) => {
                const colorIndex = product.available_colors.indexOf(
                  product.color
                );
                const imageSrc = product.images[colorIndex];

                return (
                  <ProductItem
                    id={product.id}
                    title={product.name}
                    size={product.size}
                    color={product.color}
                    price={product.price}
                    quantity={product.quantity}
                    imageSrc={imageSrc}
                  />
                );
              })}

            {!!props.products?.length && (
              <div className={styles.priceSummaryWrapper}>
                <PriceSummary products={props.products} />
                <Button onPress={onCheckoutButtonClick} fullWidth>
                  Go checkout
                </Button>
              </div>
            )}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Cart;
