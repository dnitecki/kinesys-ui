export type ChartDataType = {
  data: {};
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
  data?: ChartDataType;
};
