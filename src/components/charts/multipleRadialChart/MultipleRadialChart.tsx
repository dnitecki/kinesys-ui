import React from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import "./MultipleRadialChart.scss";
import { MultipleRadialData } from "../../../types/ChartDataType";

export default function MultipleRadialChart({ ...data }) {
  const series = data.multipleRadial.values.map(
    (element: { series: number }) => element.series
  );

  const barColor = (type: string) => {
    switch (type) {
      case "sales":
        return "bar-sales";
      case "client":
        return "bar-clients";
      default:
        return null;
    }
  };

  const fontColor = (type: string) => {
    switch (type) {
      case "sales":
        return "sales-number";
      case "client":
        return "client-number";
      default:
        return null;
    }
  };

  const chartOptions: ApexOptions = {
    series: series,
    chart: {
      height: 200,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: "50%",
        },
        track: {
          background: "#E7E7E7",
          strokeWidth: "60%",
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
    stroke: {
      lineCap: "round",
    },
    fill: {
      colors: ["#f3a225", "#4dbde8"],
    },
  };

  return (
    <>
      <div className="multiRad-container">
        <div className="multiRad-chart">
          <ReactApexChart
            options={chartOptions}
            series={chartOptions.series}
            type="radialBar"
            height={200}
            width={150}
          />
        </div>
        <div className="multiRad-legend">
          <div className="chart-card-title">{data.title}</div>
          {data.multipleRadial.values.map(
            (item: MultipleRadialData, index: number) => (
              <div className="multiRad-bar-container" key={index}>
                <div className={`multiRad-bar ${barColor(item.type)}`}>
                  {item.label}
                </div>
                <div className={`${fontColor(item.type)}`}>{item.series}</div>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
}
