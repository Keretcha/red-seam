/** @format */
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Filter.module.scss";
import {
  Button,
  ButtonGroup,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@heroui/react";
import { useRouter, useSearchParams } from "next/navigation";

const Filter = () => {
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

  const onPriceFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPriceFrom(e.target.value);
  };

  const onPriceToChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPriceTo(e.target.value);
  };

  const onApplyClick = () => {
    router.replace(`/?priceFrom=${priceFrom}&priceTo=${priceTo}`);
  };

  return (
    <div className={styles.container}>
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

            <div className={styles.fields}>
              <div className={styles.field}>
                <input
                  type='number'
                  value={priceFrom}
                  onChange={onPriceFormChange}
                  placeholder='From *'
                />
              </div>
              <div className={styles.field}>
                <input
                  value={priceTo}
                  onChange={onPriceToChange}
                  type='number'
                  id='priceTo'
                  placeholder='To *'
                />
              </div>
            </div>
            <div className={styles.button}>
              <Button onPress={onApplyClick} className={styles.filterButton}>
                Apply
              </Button>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default Filter;
