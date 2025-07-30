import { InputI } from "@/components/atoms/Input/Input.interface";
import { Control, FieldValues, Path, UseFormReturn } from "react-hook-form";

export type colorFields = 
| 'Error'
| 'Primary'
| 'Secondary'
| 'Warning'
| 'Success'
| 'Dark'

export type typeFields =
| 'phone'
| 'email'
| 'password'
| 'text'

export interface FieldsContainerI<T extends FieldValues>{
    methods?: UseFormReturn<T>;
    label?: string;
    type: typeFields;
    name: Path<T>;
    isRequired?: boolean;
    formatted?: boolean;
    variant: colorFields;
    section?: string;
    placeholder?: string;
    id: string;
}
export interface FieldsI<T extends FieldValues> extends InputI{
    type: typeFields;
    label?: string;
    name: Path<T>;
    control?: Control<T>;
    isRequired?: boolean;
    formatted?: boolean;
    variant: colorFields;
    section?: string;
}