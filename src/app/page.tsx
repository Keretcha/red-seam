/** @format */

import styles from "./page.module.css";
import ProductCard from "@/shared/components/ProductCard/ProductCard";
import { productsService } from "@/shared/services/products.service";
import Pagination from "@/shared/components/Pagination/Pagination";
import PriceFilter from "@/shared/components/PriceFilter/PriceFilter";
import PriceTag from "@/shared/components/PriceTag/PriceTag";
import SortBy from "@/shared/components/SortBy/SortBy";

export default async function Home({ searchParams }: { searchParams: any }) {
  const { priceFrom, priceTo, sort } = searchParams;

  const products = await productsService.getProducts(
    priceFrom ,
    priceTo,
    sort,
  );

  return (
    <div className={styles.contentWrapper}>
      <div className={styles.content}>
        <div className={styles.headingAndProductsWrapper}>
          <div className={styles.headingAndPriceTagWrapper}>
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
                      <PriceFilter />
                      <SortBy />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {priceFrom && priceTo && (
              <PriceTag
                priceFrom={Number(priceFrom)}
                priceTo={Number(priceTo)}
              />
            )}
          </div>
          <div className={styles.productsWrapper}>
            {products.data?.map((product: any) => (
              <ProductCard
                key={product.id}
                title={product.name}
                price={product.price}
                imageUrl={product.cover_image}
              />
            ))}
          </div>
        </div>
        <Pagination />
      </div>
    </div>
  );
}
