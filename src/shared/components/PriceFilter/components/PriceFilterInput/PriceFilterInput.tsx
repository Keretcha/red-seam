/** @format */

import { Input, InputProps } from "@heroui/react";
import { FC } from "react";
import styles from "./PriceFilterInput.module.scss";

const PriceFilterInput: FC<Omit<InputProps, "classNames">> = (props) => {
  return (
    <Input
      classNames={{
        inputWrapper: styles.inputWrapper,
      }}
      type='number'
      variant='bordered'
      {...props}
    />
  );
};

export default PriceFilterInput;
