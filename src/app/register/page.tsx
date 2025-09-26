/** @format */
"use client";
import AuthInput from "@/shared/components/AuthInput/AuthInput";
import PasswordInput from "@/shared/components/PasswordInput/PasswordInput";
import Link from "next/link";
import styles from "./page.module.scss";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { IRegisterRequest } from "@/shared/types/interfaces/register-request.interface";
import { registerSchema } from "./schemas/register.schema";
import Button from "@/shared/components/Button/Button";
import { register } from "@/shared/actions/user.actions";
import { zodResolver } from "@hookform/resolvers/zod";

export default function App() {
  const { control, handleSubmit, setError } = useForm<IRegisterRequest>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (values: IRegisterRequest) => {
    const res = await register(values);

    if (!res.errors) {
      return;
    }

    Object.entries(res.errors).forEach(([key, value]) => {
      setError(key as keyof IRegisterRequest, { message: value[0] });
    });
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
        <h2>Registration</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.form}>
            <div className={styles.fieldsWrapper}>
              <AuthInput
                fullWidth={true}
                name='username'
                placeholder='Username'
                control={control}
              />
              <AuthInput
                fullWidth={true}
                name='email'
                placeholder='Email'
                control={control}
              />
              <PasswordInput
                fullWidth={true}
                name='password'
                placeholder='Password'
                control={control}
              />
              <PasswordInput
                fullWidth={true}
                name='password_confirmation'
                placeholder='Confirm password *'
                isRequired={true}
                control={control}
              />
            </div>
            <div className={styles.buttonAndCaptionWrapper}>
              <Button
                type='submit'
                fullWidth={true}
                className={styles.registerButton}>
                Register
              </Button>
            </div>
            <div className={styles.register}>
              <span>Already member?</span>
              <Link className={styles.registerButton} href={"/login"}>
                Log in
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
