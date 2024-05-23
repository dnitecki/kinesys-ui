import { FC } from "react";
import { ChartPropsType } from "../ChartDataTypes";

export type OverviewMapper = {
  sections: Section[];
};

export type Section = {
  headerText: string;
  charts: Chart[];
};

export type Chart = {
  Component: FC<ChartPropsType>;
};
