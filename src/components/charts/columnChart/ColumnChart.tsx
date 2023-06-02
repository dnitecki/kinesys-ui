import { ApexOptions } from "apexcharts";
import React from "react";
import ReactApexChart from "react-apexcharts";
import { chartFillColorByType } from "../../../utils/helpers/helperFunctions";
import { trackColor } from "../../../constants/constants";

export default function ColumnChart({ ...data }: any) {
  const chartOptions: ApexOptions = {
    series: [data?.radialChart?.values],
    chart: {
      height: 200,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: "60%",
        },
        track: {
          background: trackColor,
          strokeWidth: "50%",
        },
        dataLabels: {
          name: {
            show: false,
          },
          total: {
            show: false,
          },
        },
      },
    },
    stroke: {
      lineCap: "round",
    },
    fill: {
      colors: chartFillColorByType(data?.type),
    },
  };

  return (
    <>
      <ReactApexChart
        options={chartOptions}
        series={chartOptions.series}
        type="bar"
        height={200}
        width={150}
      />
    </>
  );
}
