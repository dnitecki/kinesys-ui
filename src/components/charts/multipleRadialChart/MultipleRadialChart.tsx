import React from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import "./MultipleRadialChart.scss";
import { MultipleRadialData } from "../../../types/ChartDataType";
import { barClassMapper, colorClassMapper } from "../../../mappers/classMapper";
import {
  primaryBlue,
  primaryOrange,
  trackColor,
} from "../../../constants/constants";

export default function MultipleRadialChart({ ...data }) {
  const series = data.multipleRadial.values.map(
    (element: { series: number }) => element.series
  );

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
          background: trackColor,
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
      colors: [primaryOrange, primaryBlue],
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
                <div className={`multiRad-bar ${barClassMapper[item.type]}`}>
                  {item.label}
                </div>
                <div className={`${colorClassMapper[item.type]}`}>
                  {item.series}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
}
