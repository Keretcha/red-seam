/** @format */
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./PriceFilter.module.scss";
import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Input,
} from "@heroui/react";
import { useRouter, useSearchParams } from "next/navigation";
import PriceFilterInput from "./components/PriceFilterInput/PriceFilterInput";

const PriceFilter = () => {
  const [priceFrom, setPriceFrom] = useState("");
  const [priceTo, setPriceTo] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const priceFrom = searchParams.get("priceFrom");
    const priceTo = searchParams.get("priceTo");

    if (!priceFrom || !priceTo) return;

    setPriceFrom(priceFrom);
    setPriceTo(priceTo);
  }, []);

  const onApplyClick = () => {
    if (!priceFrom && !priceTo) {
      router.replace("/");
      return;
    }

    router.replace(`/?priceFrom=${priceFrom}&priceTo=${priceTo}`);
  };

  return (
    <Popover
      classNames={{
        trigger: styles.trigger,
        content: styles.content,
      }}
      placement={"bottom-end"}>
      <PopoverTrigger>
        <div className={styles.toggle}>
          <Image
            src='/icons/filter.svg'
            alt='Filter'
            width={18}
            height={18}
            className={styles.icon}
          />
          <span>Filter</span>
        </div>
      </PopoverTrigger>
      <PopoverContent>
        <div className={styles.panel}>
          <div className={styles.header}>
            <span>Select price</span>
          </div>

          <div className={styles.fieldsAndButtonWrapper}>
            <div className={styles.fields}>
              <PriceFilterInput
                placeholder='From *'
                value={priceFrom}
                onValueChange={setPriceFrom}
              />
              <PriceFilterInput
                placeholder='To *'
                value={priceTo}
                onValueChange={setPriceTo}
              />
            </div>
            <div className={styles.button}>
              <Button onPress={onApplyClick} className={styles.filterButton}>
                Apply
              </Button>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default PriceFilter;
