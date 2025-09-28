/** @format */
import { getUser } from "@/shared/actions/user.actions";
import styles from "./Header.module.scss";
import LoginButton from "./components/LoginButton/LoginButton";
import Logo from "./components/Logo/Logo";
import CartIcon from "../Icons/CartIcon";
import Image from "next/image";
import Cart from "./components/CartDrawer/CartDrawer";
import { cartService } from "@/shared/services/cart.service";

const Header = async () => {
  const [user, products] = await Promise.all([
    getUser(),
    cartService.getCart(),
  ]);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Logo />
        {!user && <LoginButton />}
        {user && (
          <div className={styles.wrapper}>
            <Cart products={products.data} />
            <Image
              src={"/images/avatar.png"}
              alt='avatarImage'
              width={40}
              height={40}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
