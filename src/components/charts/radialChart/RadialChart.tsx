import { ApexOptions } from "apexcharts";
import React from "react";
import ReactApexChart from "react-apexcharts";

export default function RadialChart({ ...data }: any) {
  const fillColor = (type: string) => {
    if (type === "sales") {
      return ["#F3A225"];
    }
    if (type === "client") {
      return ["#4DBDE8"];
    } else {
      return ["#F3A225"];
    }
  };
  const textColor = (title: string) => {
    if (title === "Total Statuses") {
      return "#F3A225";
    } else {
      return "#212121";
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
      colors: fillColor(data?.type),
    },
  };

  return (
    <>
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
