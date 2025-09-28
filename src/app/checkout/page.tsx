/** @format */
"use client";

import styles from "./page.module.scss";
import CheckoutInput from "@/shared/components/CheckoutInput/CheckoutInput";
import { useForm } from "react-hook-form";
import { ICheckoutRequest } from "@/shared/types/interfaces/checkout.interface";
import Image from "next/image";
import EmailIcon from "@/shared/components/Icons/emailIcon";

export default function App(props: ICheckoutRequest) {
  const { control } = useForm<ICheckoutRequest>({});

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h2>Checkout</h2>
      </div>
      <div className={styles.content}>
        <div className={styles.details}>
          <h3>Order details</h3>
          <div className={styles.form}>
            <div className={styles.name}>
              <CheckoutInput
                fullWidth={true}
                name='firstName'
                placeholder='Name'
                control={control}
              />
              <CheckoutInput
                fullWidth={true}
                name='lastName'
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
                name='zip'
                placeholder='Zip code'
                control={control}
              />
            </div>
          </div>
        </div>
        <div className={styles.clothing}>
          <div className={styles.cards}></div>
        </div>
      </div>
    </div>
  );
}
