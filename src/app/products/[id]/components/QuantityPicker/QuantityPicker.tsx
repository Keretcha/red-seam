/** @format */

"use client";
import { Select, SelectItem } from "@heroui/select";
import styles from "./QuantityPicker.module.scss";
import { useProduct } from "../../providers/ProductProvider";
import { useMemo } from "react";

const QuantityPicker = () => {
  const { product } = useProduct();

  const items = useMemo(() => {
    const returnable = [];

    for (let i = 1; i <= product.quantity; i++) {
      returnable.push({
        key: String(i),
        label: String(i),
      });
    }

    return returnable;
  }, []);

  return (
    <div className={styles.quantityWrapper}>
      <div className={styles.quantityHeading}>
        <span>Quantity</span>
      </div>
      <div className={styles.quantity}>
        <Select
          disabled={!product.quantity}
          classNames={{
            trigger: styles.trigger,
            value: styles.value,
            innerWrapper: styles.innerWrapper,
            listbox: styles.listbox,
          }}
          items={items}
          placeholder='1'>
          {(animal) => <SelectItem>{animal.label}</SelectItem>}
        </Select>
      </div>
    </div>
  );
};

export default QuantityPicker;
