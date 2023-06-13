import React from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import "./MultipleRadialChart.scss";
import { MultipleRadialData } from "../../../types/ChartDataType";
import {
  barClassMapper,
  colorClassMapper,
  radMapper,
} from "../../../mappers/classMapper";
import {
  lightGrey,
  primaryBlue,
  primaryOrange,
  trackColor,
} from "../../../constants/constants";

export default function MultipleRadialChart({ ...data }) {
  const series = data.multipleRadial.values.map(
    (element: { series: number }) => element.series
  );

  const radialSize = (data: any) => {
    if (data.multipleRadial.values.length > 1) {
      return "50%";
    }
    return "60%";
  };

  const chartOptions: ApexOptions = {
    series: series,
    chart: {
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: radialSize(data),
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
      colors: [primaryOrange, primaryBlue, lightGrey],
    },
  };

  return (
    <>
      <div className="chart-card">
        <div className="multiRad-container">
          <div className="multiRad-chart">
            <ReactApexChart
              options={chartOptions}
              series={chartOptions.series}
              type="radialBar"
              height={250}
              width={200}
            />
          </div>
          <div className="multiRad-legend">
            <div className="chart-card-title">{data.title}</div>
            {data.multipleRadial.values.map(
              (item: MultipleRadialData, index: number) => (
                <div className="multiRad-bar-container" key={index}>
                  <div
                    className={`${radMapper[data.title]} ${
                      barClassMapper[item.type]
                    }`}
                  >
                    {item.label}
                  </div>
                  <div className={`${colorClassMapper[item.type]}`}>
                    {item.series}%
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
}
