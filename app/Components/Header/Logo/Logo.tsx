/** @format */

import { JSX } from "react";
import styles from "./Logo.module.scss";
import Link from "next/link";
import Image from "next/image";

const Logo = (): JSX.Element => {
  const logoSrc = "icons/handEye.svg";
  return (
    <div className={styles.logo}>
      <Link href='/' className={styles.logoContent}>
        <Image src={logoSrc} alt='Logo' width={24} height={24} />
        <span className={styles.companyName}>RedSeam Clothing</span>
      </Link>
    </div>
  );
};

export default Logo;
