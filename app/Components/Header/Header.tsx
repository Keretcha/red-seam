/** @format */

import { HeaderPropsInterface } from "./Type/header.type";
import styles from "./Header.module.scss";
import Logo from "./Logo/Logo";
import Image from "next/image";
import Avatar from "../Avatar/Avatar";

const Header = ({ user }: HeaderPropsInterface) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Logo />
        <div className={styles.right}>
          {user && (
            <Image
              src='/icons/shoppingCart.svg'
              alt='cart'
              width={24}
              height={24}
              className={styles.cartIcon}
            />
          )}
          <Avatar user={user} />
        </div>
      </div>
    </div>
  );
};

export default Header;
