/** @format */

"use client";

import CheckoutInput from "@/shared/components/CheckoutInput/CheckoutInput";
import EmailIcon from "@/shared/components/Icons/emailIcon";
import styles from "./CheckoutForm.module.scss";
import { ICheckoutRequest } from "@/shared/types/interfaces/checkout.interface";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { checkoutSchema } from "../../schemas/checkout.schema";
import { FC, useState } from "react";
import { checkoutCart } from "@/shared/actions/cart.actions";
import Congrats from "@/shared/components/CongratsModal/CongratsModal";

interface Props {
  userEmail: string;
}

const CheckoutForm: FC<Props> = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { control, handleSubmit } = useForm<ICheckoutRequest>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      email: props.userEmail,
    },
  });

  const onSubmit = async (values: ICheckoutRequest) => {
    const res = await checkoutCart(values);

    if (!res.ok) return;

    setIsOpen(true);
  };

  return (
    <>
      <Congrats isOpen={isOpen} setIsOpen={setIsOpen} />
      <form id='checkout-form' onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.form}>
          <div className={styles.name}>
            <CheckoutInput
              fullWidth={true}
              name='name'
              placeholder='Name'
              control={control}
            />
            <CheckoutInput
              fullWidth={true}
              name='surname'
              placeholder='Surname'
              control={control}
            />
          </div>
          <div className={styles.email}>
            <CheckoutInput
              fullWidth={true}
              name='email'
              placeholder='Email'
              control={control}
              startContent={<EmailIcon />}
            />
          </div>
          <div className={styles.address}>
            <CheckoutInput
              fullWidth={true}
              name='address'
              placeholder='Address'
              control={control}
            />
            <CheckoutInput
              fullWidth={true}
              name='zip_code'
              placeholder='Zip code'
              control={control}
              type='number'
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default CheckoutForm;
