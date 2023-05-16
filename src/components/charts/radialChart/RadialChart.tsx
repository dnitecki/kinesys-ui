import { ApexOptions } from "apexcharts";
import React from "react";
import ReactApexChart from "react-apexcharts";

export default function RadialChart() {
  const data: ApexOptions = {
    series: [70],
    chart: {
      height: 200,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 15,
          size: "70%",
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            offsetY: 10,
            fontSize: "30px",
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
    dataLabels: {
      offsetX: -500,
      offsetY: -50,
      textAnchor: "middle",
    },
    stroke: {
      lineCap: "round",
    },
  };

  return (
    <>
      <ReactApexChart
        options={data}
        series={data.series}
        type="radialBar"
        height={200}
        width={150}
      />
    </>
  );
}
