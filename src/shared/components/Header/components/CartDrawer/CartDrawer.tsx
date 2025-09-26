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

export interface Props {
  productCount?: number;
  products?: IProduct[];
}

const Cart = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClick = () => {
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
            <div>Shopping Cart {props.productCount}</div>
            <div className={styles.xIcon} onClick={onClick}>
              <CloseModalIcon width={32} height={32} />
            </div>
          </DrawerHeader>
          <DrawerBody>
            {!props.products && (
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
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Cart;
