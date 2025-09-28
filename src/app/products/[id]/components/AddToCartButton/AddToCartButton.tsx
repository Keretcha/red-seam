/** @format */

"use client";

import Button from "@/shared/components/Button/Button";
import WhiteCartICon from "@/shared/components/Icons/WhiteCartICon";
import { IUser } from "@/shared/types/interfaces/user.interface";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { useProduct } from "../../providers/ProductProvider";
import { addProductToCart } from "@/shared/actions/cart.actions";

interface Props {
  user: IUser | null;
}

const AddToCartButton: FC<Props> = (props) => {
  const { product, selectedColor, selectedSize } = useProduct();

  const router = useRouter();
  const onClick = async () => {
    if (!props.user) {
      router.replace("/login");
      return;
    }

    await addProductToCart(product.id, selectedColor, 1, selectedSize);
  };

  return (
    <Button fullWidth onPress={onClick}>
      <WhiteCartICon />
      Add to cart
    </Button>
  );
};

export default AddToCartButton;
