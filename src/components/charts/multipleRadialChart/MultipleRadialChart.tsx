import React from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import "./MultipleRadialChart.scss";

export default function MultipleRadialChart({ ...data }) {
  const chartOptions: ApexOptions = {
    series: data.multipleRadial.values.series,
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
          <div className="multiRad-bar-container">
            <div className="multiRad-bar bar-sales">Sales</div>
            <div className="sales-number">
              {data.multipleRadial.values.series[0]}
            </div>
          </div>
          <div className="multiRad-bar-container">
            <div className="multiRad-bar bar-clients">Clients</div>
            <div className="client-number">
              {data.multipleRadial.values.series[1]}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
