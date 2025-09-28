/** @format */

"use client";

import {  useState } from "react";
import { InputProps } from "../Input/Input";
import { FieldValues } from "react-hook-form";
import AuthInput from "../AuthInput/AuthInput";
import EyeIcon from "../Icons/EyeIcon";

const PasswordInput = <T extends FieldValues>(props: InputProps<T>) => {
  const [shouldShow, setShouldShow] = useState(false);

  const onClick = () => {
    setShouldShow((prevState) => !prevState);
  };

  const type = shouldShow ? "text" : "password";

  return (
    <AuthInput
      {...props}
      type={type}
      endContent={
        <div className={"cursor-pointer"} onClick={onClick}>
          <EyeIcon />
        </div>
      }
    />
  );
};

export default PasswordInput;
