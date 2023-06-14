import React from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import "./MultipleRadialChart.scss";
import { MultipleRadialData } from "../../../types/ChartDataType";
import {
  barClassMapper,
  colorClassMapper,
  radMapper,
  typeColorMapper,
} from "../../../mappers/classMapper";
import { trackColor } from "../../../constants/constants";

export default function MultipleRadialChart({ ...data }) {
  const series = data.multipleRadial.values.map(
    (element: { series: number }) => element.series
  );

  const colors = data.multipleRadial.values.map(
    (item: { type: string }) => typeColorMapper[item.type]
  );

  const radialSize = (data: any) => {
    if (data.multipleRadial.values.length > 1) {
      return "50%";
    }
    return "70%";
  };

  const radialHeight = (data: any) => {
    if (data.multipleRadial.values.length > 1) {
      return 240;
    }
    return 220;
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
      colors: colors,
    },
  };

  return (
    <>
      <div className="chart-card-container">
        <div className="multiRad-container">
          <div className="multiRad-chart">
            <ReactApexChart
              options={chartOptions}
              series={chartOptions.series}
              type="radialBar"
              height={radialHeight(data)}
              width={"100%"}
            />
          </div>
          <div className="multiRad-legend">
            <div className="chart-card-title">{data.multipleRadial.title}</div>
            <div className="multiRad-bars-container">
              {data.multipleRadial.values.map(
                (item: MultipleRadialData, index: number) => (
                  <div className="multiRad-bar" key={index}>
                    <div
                      className={`${radMapper[data.multipleRadial.title]} ${
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
      </div>
    </>
  );
}
