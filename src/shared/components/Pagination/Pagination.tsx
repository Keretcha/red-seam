/** @format */
"use client";

import { Pagination } from "@heroui/react";
import styles from "./Pagination.module.scss";

export default function CustomPagination() {
  return (
    <Pagination
      showControls
      initialPage={1}
      total={10}
      className={styles.pagination}
      classNames={{
        base: styles.base,
        item: styles.item,
        cursor: styles.cursor,
        prev: styles.nav,
        next: styles.nav,
      }}
    />
  );
}
