/** @format */
import { FC } from "react";
import styles from "./Button.module.scss";
import { ButtonProps, Button as HeroUIButton } from "@heroui/react";

const Button: FC<ButtonProps> = (props) => {
  return (
    <HeroUIButton {...props} className={styles.buttonWrapper}>
      {props.children}
    </HeroUIButton>
  );
};

export default Button;
