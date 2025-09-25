/** @format */
"use client";

import { Pagination as HeroUIPagination } from "@heroui/react";
import styles from "./Pagination.module.scss";
import { useRouter, useSearchParams } from "next/navigation";
import { number } from "framer-motion";
import { FC } from "react";

interface Props {
  total: number;
}

const Pagination: FC<Props> = (props) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const onPageChange = (page: number) => {
    const currentSearchParams = new URLSearchParams();
    currentSearchParams.delete("page");
    currentSearchParams.append("page", String(page));

    router.replace(`/?${currentSearchParams.toString()}`);
  };

  return (
    <HeroUIPagination
      initialPage={1}
      total={props.total}
      onChange={onPageChange}
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
};

export default Pagination;