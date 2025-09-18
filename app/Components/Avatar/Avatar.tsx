/** @format */

import Image from "next/image";
import styles from "./Avatar.module.scss";
import { UserInterface } from "../Header/Interfaces/header-props.interface";

interface AvatarProps {
  user?: UserInterface | null;
}

const Avatar = ({ user }: AvatarProps) => {
  if (!user) {
    return (
      <div className={styles.unAuth}>
        <Image src='/icons/user.svg' alt='User' width={20} height={20} />
        <span className={styles.loginText}>Log in</span>
      </div>
    );
  }

  return (
    <div className={styles.auth}>
      <Image
        src={user.avatarUrl}
        alt={user.name}
        width={32}
        height={32}
        className={styles.avatarImage}
      />
    </div>
  );
};

export default Avatar;
