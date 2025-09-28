/** @format */

import { FieldValues } from "react-hook-form";
import Input, { InputProps } from "../Input/Input";
import styles from "./CheckoutInput.module.scss";

const CheckoutInput = <T extends FieldValues>(props: InputProps<T>) => {
  return (
    <Input
      classNames={{
        inputWrapper: styles.wrapper,
        innerWrapper: styles.inputWrapper,
        input: styles.input,
      }}
      {...props}
      control={props.control}
    />
  );
};

export default CheckoutInput;
