import { FC, ReactNode } from "react";

export interface Map {
  [key: string]: string | undefined | JSX.Element | FC | ReactNode;
}
