import { ApexOptions } from "apexcharts";
import React from "react";
import ReactApexChart from "react-apexcharts";

export default function RadialChart(values: any, type: any) {
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

  const chartOptions: ApexOptions = {
    series: [values.values],
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
            color: "#F3A225",
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
      colors: fillColor(type),
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
