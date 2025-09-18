/** @format */
import { ButtonPropsInterface } from "./interfaces/button-props.interfaces";
import styles from "./Button.module.scss";

const Button = ({ label, className = "", onClick }: ButtonPropsInterface) => {
  return (
    <div className={`${styles.button} ${className}`}>
      <button className={styles.defaultButton} onClick={onClick}>
        {label}
      </button>
    </div>
  );
};

export default Button;
