/** @format */
"use client";

import styles from "./PriceTag.module.scss";
import XIcon from "../Icons/XIcon";
import { useSearchParams, useRouter } from "next/navigation";

const PriceTag = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const priceFrom = searchParams.get("priceFrom");
  const priceTo = searchParams.get("priceTo");

  const onClick = () => {
    const currentSearchParams = new URLSearchParams(searchParams);
    currentSearchParams.delete("priceFrom");
    currentSearchParams.delete("priceTo");
    router.replace(`/?${currentSearchParams.toString()}`);
  };

  return (
    <div className={styles.container}>
      <span>
        Price: {priceFrom}-{priceTo}
      </span>
      <div onClick={onClick}>
        <XIcon />
      </div>
    </div>
  );
};

export default PriceTag;
