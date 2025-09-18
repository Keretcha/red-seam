import { JSX } from "react";
import { HeaderPropsInterface } from "../Interfaces/header-props.interface";

export type HeaderType = (props: HeaderPropsInterface) => JSX.Element;

export type { HeaderPropsInterface };
