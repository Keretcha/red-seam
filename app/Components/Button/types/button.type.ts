import { JSX } from "react";
import { ButtonPropsInterface } from "../interfaces/button-props.interfaces";

export type ButtonType = (props: ButtonPropsInterface) => JSX.Element;