import { RefObject } from "react";

export interface IconI {
    color?: string;
    containerRef?: RefObject<HTMLElement>;
    path?: string;
}