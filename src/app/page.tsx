/** @format */

import Filter from "@/shared/components/Filter/Filter";
import styles from "./page.module.css";
import ProductCard from "@/shared/components/ProductCard/ProductCard";
import { productsService } from "@/shared/services/products.service";
import Image from "next/image";
import Pagination from "@/shared/components/Pagination/Pagination";

export default async function Home({ searchParams }: { searchParams: any }) {
  const { priceFrom, priceTo } = searchParams;

  const products = await productsService.getProducts(
    priceFrom || "",
    priceTo || ""
  );

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <h1 className={styles.productHeader}>Products</h1>
        </div>
        <div className={styles.right}>
          <div className={styles.Fcontainer}>
            <div className={styles.filter}>
              <span className={styles.counted}>
                Showing 1-10 of 100 results
              </span>
              <span>|</span>
              <div className={styles.actions}>
                <Filter />
                <span>sort by</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        {products.data?.map((product: any) => (
          <ProductCard
            key={product.id}
            title={product.name}
            price={product.price}
            imageUrl={product.cover_image}
          />
        ))}
      </div>
      <div>
        <Pagination />
      </div>
    </div>
  );
}
