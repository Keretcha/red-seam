/** @format */
import styles from "./Header.module.scss";
import LoginButton from "./components/LoginButton/LoginButton";
import Logo from "./components/Logo/Logo";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Logo />
        <LoginButton />
      </div>
    </div>
  );
};

export default Header;
