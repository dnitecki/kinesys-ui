import { ApexOptions } from "apexcharts";
import React from "react";
import ReactApexChart from "react-apexcharts";
import EastRoundedIcon from "@mui/icons-material/EastRounded";
import { chartFillColorByType } from "../../../utils/helpers/helperFunctions";
import "./ColumnChart.scss";

export default function ColumnChart({ ...data }: any) {
  const response = data.columnChart.values;
  const series = response.map((item: any) => {
    return {
      name: item.label,
      data: item.series,
    };
  });

  const chartOptions: ApexOptions = {
    series: series,
    chart: {
      type: "bar",
      sparkline: {
        enabled: true,
      },
      toolbar: {
        show: true,
        offsetY: -15,
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
      show: false,
    },
    plotOptions: {
      bar: {
        borderRadius: 2,
        horizontal: false,
        columnWidth: "50%",
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
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      labels: {
        show: false,
      },
    },
    legend: {
      show: false,
    },
    fill: {
      colors: chartFillColorByType(data?.columnChart.type),
    },
  };

  return (
    <>
      <div className="chart-card-container">
        <div className="column-card-label">
          <div className="chart-card-title">{data.columnChart.title}</div>
          <div className="app-button">
            <a href="status">View Status</a>
            <EastRoundedIcon />
          </div>
        </div>
        <div className="column-chart-container">
          <ReactApexChart
            options={chartOptions}
            series={chartOptions.series}
            type="bar"
            height={275}
            width={800}
          />
        </div>
      </div>
    </>
  );
}
