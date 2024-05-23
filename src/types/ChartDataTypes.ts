import { OverviewDataType } from "./responseTypes/OverviewResponseTypes";

export type ChartDataType = {
  [key: string]: {};
};

export type BarChartData = {
  name: string;
  value: number;
};

export type MultipleRadialData = {
  series: number;
  label: string;
  type: string;
};

export type ChartPropsType = {
  chartData: ChartDataType;
};
