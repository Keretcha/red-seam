/** @format */
"use client";

import React from "react";
import styles from "./page.module.scss";
import { useForm } from "react-hook-form";
import Image from "next/image";
import AuthInput from "@/shared/components/AuthInput/AuthInput";
import Button from "@/shared/components/Button/Button";
import Link from "next/link";
import PasswordInput from "@/shared/components/PasswordInput/PasswordInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "./schemas/login-form.schema";
import { login } from "@/shared/actions/user.actions";
import { ILoginRequest } from "@/shared/types/interfaces/login-request.interface";

export default function App() {
  const {
    handleSubmit,
    control,
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (values: ILoginRequest) => {
    await login(values.email, values.password);
  };

  return (
    <div className={styles.container}>
      <Image
        src={"/images/login-banner.png"}
        alt='banner'
        width={948}
        height={1000}
      />
      <div className={styles.loginWrapper}>
        <h2>Log in</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.form}>
            <div className={styles.fieldsWrapper}>
              <AuthInput
                fullWidth={true}
                name='email'
                placeholder='Email'
                isRequired={true}
                control={control}
              />
              <PasswordInput
                fullWidth={true}
                name='password'
                placeholder='Password'
                isRequired={true}
                control={control}
              />
            </div>
            <div className={styles.buttonAndCaptionWrapper}>
              <Button type='submit' fullWidth={true}>
                Log in
              </Button>
            </div>
            <div className={styles.register}>
              <span>Not a member?</span>
              <Link className={styles.registerButton} href={"/register"}>
                Register
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
