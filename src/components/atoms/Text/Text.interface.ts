import React from "react";

export type typeTextI =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'body-1-bold'
  | 'small'
  | 'label'
  | 'p'
  | 'span'
  | 'caption';


export interface TextI extends React.HTMLAttributes<HTMLElement> {
    formatted?: boolean;
    section?: string;
    value: string;
    type?: typeTextI;
    params?: Record<string, string | number | Date> | undefined;
    htmlFor?: string;
}