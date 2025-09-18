/** @format */
"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./Filter.module.scss";
import Button from "../Button/Button";

const Filter = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.toggle} onClick={() => setIsOpen((prev) => !prev)}>
        <span>Filter</span>
        <Image
          src='/icons/filter.svg'
          alt='Filter'
          width={18}
          height={18}
          className={styles.icon}
        />
      </div>

      {isOpen && (
        <div className={styles.panel}>
          <div className={styles.header}>
            <span>Select price</span>
          </div>

          <div className={styles.fields}>
            <div className={styles.field}>
              <input type='number' placeholder='From *' />
            </div>
            <div className={styles.field}>
              <input type='number' id='priceTo' placeholder='To *' />
            </div>
          </div>
          <div className={styles.button}>
            <Button label='Apply' className={styles.filterButton} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;
