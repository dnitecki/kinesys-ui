export type ChartDataType = {
  data: {
    title: string;
    type?: string;
    radialChart?: {
      values: number | undefined;
    };
    barPercentage?: {
      values: number[];
    };
    columnChart?: {
      values: number[];
    };
    barChart?: {
      values: number[];
    };
    link?: {
      linkText: string;
      linkUrl: string;
    };
  };
};
