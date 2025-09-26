/** @format */

import { FieldValues } from "react-hook-form";
import Input, { InputProps } from "../Input/Input";
import styles from "./AuthInput.module.scss";

const AuthInput = <T extends FieldValues>(props: InputProps<T>) => {
  return (
    <Input
      classNames={{
        innerWrapper: styles.inputWrapper,
      }}
      {...props}
      control={props.control}
    />
  );
};

export default AuthInput;
