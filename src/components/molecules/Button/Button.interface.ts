import { ButtonHTMLAttributes } from "react";
import { colorFields } from "../Fields/Fields.interface";

export interface ButtonI extends ButtonHTMLAttributes<HTMLButtonElement> {
    formatted?: boolean;
    section?: string;
    icon?: string;
    text: string;
    variant: colorFields,
}