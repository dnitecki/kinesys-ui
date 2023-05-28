export type ChartDataType = {
  data: {
    title: string;
    type?: string;
    radialChart?: {
      values: number | undefined;
    };
    multipleRadial?: {
      values: MultipleRadialData;
    };
    barPercentage?: {
      values: number[];
    };
    columnChart?: {
      values: number[];
    };
    barChart?: {
      values: BarChartData[];
    };
    link?: {
      linkText: string;
      linkUrl: string;
    };
  };
};

export type BarChartData = {
  name: string;
  value: number;
};

export type MultipleRadialData = {
  series: number[];
  labels: string[];
};
