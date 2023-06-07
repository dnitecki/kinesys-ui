import { ApexOptions } from "apexcharts";
import React from "react";
import ReactApexChart from "react-apexcharts";
import { chartFillColorByType } from "../../../utils/helpers/helperFunctions";

export default function ColumnChart({ ...data }: any) {
  const formatData = () => {
    const keys = ["data"];
    const series = data.columnChart.values.map(
      (element: { series: number[] }) => element.series
    );
    const seriesObj = keys.reduce(
      (obj, key, index) => ({ ...obj, [key]: series[index] }),
      {}
    );
    console.log(seriesObj);
    return [seriesObj];
  };
  formatData();
  const chartOptions: ApexOptions = {
    series: [],
    chart: {
      height: 350,
      width: "100%",
      type: "bar",
      sparkline: {
        enabled: true,
      },
      toolbar: {
        show: true,
        offsetY: -12,
        tools: {
          download: true,
          selection: false,
          zoom: false,
          zoomin: false,
          zoomout: false,
          pan: false,
          reset: false,
        },
      },
    },
    grid: {
      show: true,
    },
    plotOptions: {
      bar: {
        borderRadius: 2.5,
        horizontal: false,
        columnWidth: "30%",
        barHeight: "100%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      lineCap: "round",
      width: 2,
      colors: ["transparent"],
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
    xaxis: {
      labels: {
        show: false,
      },
    },
    legend: {
      show: false,
    },
    fill: {
      colors: chartFillColorByType(data?.type),
    },
  };

  return (
    <>
      <div className="chart-card-title column-card">{data.title}</div>
      <ReactApexChart
        options={chartOptions}
        series={chartOptions.series}
        type="bar"
        height={200}
        width={700}
      />
    </>
  );
}
