/** @format */
import { InputProps as HeroUIInputProps } from "@heroui/react";
import { Control, Controller, FieldValues, Path } from "react-hook-form";
import { Input as HeroUIInput } from "@heroui/react";

export interface InputProps<T extends FieldValues> extends HeroUIInputProps {
  control: Control<T>;
}

const Input = <T extends FieldValues>(props: InputProps<T>) => {
  return (
    <Controller
      control={props.control}
      name={props.name as Path<T>}
      render={({ field, fieldState }) => (
        <HeroUIInput
          {...props}
          {...field}
          errorMessage={fieldState.error?.message}
          isInvalid={fieldState.invalid}
        />
      )}
    />
  );
};

export default Input;
