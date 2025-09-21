/** @format */

import { JSX } from "react";
import styles from "./Logo.module.scss";
import Link from "next/link";
import Image from "next/image";
import LogoIcon from "@/../public/icons/logo.svg";

const Logo = (): JSX.Element => {
  return (
    <div className={styles.logo}>
      <Link href='/' className={styles.logoContent}>
        <Image src={LogoIcon} alt='Logo' />
        <span className={styles.companyName}>RedSeam Clothing</span>
      </Link>
    </div>
  );
};

export default Logo;
