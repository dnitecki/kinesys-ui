import { ApexOptions } from "apexcharts";
import React from "react";
import ReactApexChart from "react-apexcharts";
import { chartFillColorByType } from "../../../utils/helpers/helperFunctions";
import {
  primaryGrey,
  primaryOrange,
  trackColor,
} from "../../../constants/constants";

export default function RadialChart({ ...data }: any) {
  const textColor = (title: string) => {
    if (data.title === "Total Statuses") {
      return primaryOrange;
    } else {
      return primaryGrey;
    }
  };

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
          value: {
            offsetY: 10,
            fontSize: "30px",
            color: textColor(data?.title),
            fontWeight: "bold",
            formatter: function (val) {
              let number = val.toString();
              let result = parseInt(number);
              return result.toString();
            },
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
      <div className="chart-card-title">{data.title}</div>
      <ReactApexChart
        options={chartOptions}
        series={chartOptions.series}
        type="radialBar"
        height={200}
        width={150}
      />
    </>
  );
}
