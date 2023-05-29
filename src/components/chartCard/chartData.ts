import { ChartDataType } from "../../types/ChartDataType";

export const chartData: ChartDataType[] = [
  {
    data: {
      title: "Total Statuses",
      type: "total",
      radialChart: {
        values: 27,
      },
    },
  },
  {
    data: {
      title: "All Sales",
      type: "sales",
      radialChart: {
        values: 89,
      },
    },
  },
  {
    data: {
      title: "All Clients",
      type: "client",
      radialChart: {
        values: 41,
      },
    },
  },
  {
    data: {
      title: "Statuses Pending",
      multipleRadial: {
        values: [
          {
            series: 89,
            label: "Sales",
            type: "sales",
          },
          {
            series: 41,
            label: "Clients",
            type: "client",
          },
        ],
      },
    },
  },
];
