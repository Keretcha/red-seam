/** @format */

import Image from "next/image";
import styles from "./LoginButton.module.scss";
import UserProfileIcon from "@/../public/icons/user-profile.svg";
import Link from "next/link";

const LoginButton = () => {
  return (
    <Link href={"/login"} className={styles.container}>
      <Image src={UserProfileIcon} alt='Login Icon' />
      <span className={styles.loginText}>Log in</span>
    </Link>
  );
};

export default LoginButton;
