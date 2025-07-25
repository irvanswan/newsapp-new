import { InputI } from "@/components/atoms/Input/Input.interface";

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

export interface FieldsI extends InputI{
    type: typeFields;
    label?: string;
    isRequired?: boolean;
    formatted?: boolean;
    variant: colorFields;
    section?: string;
}