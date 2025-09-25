/** @format */


import styles from "./PriceTag.module.scss";
import XIcon from "../Icons/XIcon";
import Link from "next/link";
import { FC } from "react";

interface Props {
    priceFrom: number;
    priceTo: number
}

const PriceTag: FC<Props> = (props) => {
  return (
    <div className={styles.container}>
      <span>
        Price: {props.priceFrom}-{props.priceTo}
      </span>
      <Link href={'/'}>
        <XIcon />
      </Link>
    </div>
  );
};

export default PriceTag;
