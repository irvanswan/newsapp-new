import React from "react";

export interface InputI extends React.InputHTMLAttributes<HTMLInputElement>{
    formatted?: boolean;
    section?: string;
}