/** @format */

import Image from "next/image";
import styles from "./page.module.css";
import Header from "./Components/Header/Header";
import ProductsHeading from "./Components/ProductsHeading/ProductsHeading";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <ProductsHeading />
    </div>
  );
}
