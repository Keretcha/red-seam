/** @format */
"use client";

import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
} from "@heroui/react";
import DoneIcon from "../Icons/DoneIcon";
import styles from "./CongratsModal.module.scss";
import { Dispatch, FC, SetStateAction } from "react";
import CloseModalIcon from "../Icons/CloseModalIcon";
import Link from "next/link";

interface Props {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const Congrats: FC<Props> = (props) => {
  const onClose = () => {
    props.setIsOpen(false);
  };

  return (
    <Modal
      size='2xl'
      classNames={{ base: styles.base }}
      isOpen={props.isOpen}
      onOpenChange={props.setIsOpen}
      hideCloseButton>
      <ModalContent className={styles.modalContent}>
        <ModalHeader>
          <div className={styles.closeButtonWrapper} onClick={onClose}>
            <CloseModalIcon />
          </div>
        </ModalHeader>
        <ModalBody>
          <div className={styles.container}>
            <div className={styles.content}>
              <div className={styles.doneIcon}>
                <DoneIcon />
              </div>
              <div className={styles.congratsText}>
                <h2>Congrats!</h2>
                <span>Your order is placed successfully!</span>
              </div>
            </div>
            <Button href='/' as={Link} className={styles.button}>
              <span>Continue shopping</span>
            </Button>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default Congrats;
