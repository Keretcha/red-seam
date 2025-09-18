import { JSX } from "react";
import { FilterPropsInterface } from "../interfaces/filter-props.interface";

export type FilterType = (props: FilterPropsInterface) => JSX.Element;
