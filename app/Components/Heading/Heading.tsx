/** @format */

import styles from "./Heading.module.scss";
import { HeadingPropsInterface } from "./Interface/heading-props.interface";
import { HeadingType } from "./Types/heading.type";
import { HeadingTypeEnum } from "./enums/heading-type.enum";

const Heading: HeadingType = (props: HeadingPropsInterface) => {
  const Type: HeadingTypeEnum = props.type;
  const className: string = `${props.type}`;
  return <Type className={styles[className]}>{props.children}</Type>;
};

export default Heading;
