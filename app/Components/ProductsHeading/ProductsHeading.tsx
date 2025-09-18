/** @format */
import Heading from "../Heading/Heading";
import styles from "./ProductsHeading.module.scss";
import { HeadingTypeEnum } from "../Heading/Interface/heading-props.interface";
import Filter from "../Filter/Filter";

const ProductsHeading = () => {
  return (
    <div className={styles.container}>
      <Heading type={HeadingTypeEnum.H1}>Products</Heading>
      <div className={styles.filter}>
        <span>Showing 1-10 of 100 results</span>
        <span>|</span>
        <Filter />
        
      </div>
    </div>
  );
};
export default ProductsHeading;
