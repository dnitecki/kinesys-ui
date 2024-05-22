import { FC } from "react";

export type OverviewMapper = {
  sections: Section[];
};

export type Section = {
  headerText: string;
  charts: Chart[];
};

export type Chart = {
  Component: FC;
};
