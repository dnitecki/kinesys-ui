import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";
import { lightGrey, primaryOrange } from "../../../constants/constants";

export default function ColumnMarkerChart() {
  const chartOptions: ApexOptions = {
    series: [
      {
        name: "Actual",
        data: [
          {
            x: "2011",
            y: 1292,
            goals: [
              {
                name: "Expected",
                value: 1400,
                strokeHeight: 5,
                strokeColor: lightGrey,
              },
            ],
          },
          {
            x: "2012",
            y: 4432,
            goals: [
              {
                name: "Expected",
                value: 1400,
                strokeHeight: 5,
                strokeColor: lightGrey,
              },
            ],
          },
          {
            x: "2013",
            y: 5423,
            goals: [
              {
                name: "Expected",
                value: 1400,
                strokeHeight: 5,
                strokeColor: lightGrey,
              },
            ],
          },
          {
            x: "2014",
            y: 6653,
            goals: [
              {
                name: "Expected",
                value: 1400,
                strokeHeight: 5,
                strokeColor: lightGrey,
              },
            ],
          },
          {
            x: "2015",
            y: 8133,
            goals: [
              {
                name: "Expected",
                value: 1400,
                strokeHeight: 5,
                strokeColor: lightGrey,
              },
            ],
          },
          {
            x: "2016",
            y: 7132,
            goals: [
              {
                name: "Expected",
                value: 1400,
                strokeHeight: 5,
                strokeColor: lightGrey,
              },
            ],
          },
          {
            x: "2017",
            y: 7332,
            goals: [
              {
                name: "Expected",
                value: 1400,
                strokeHeight: 5,
                strokeColor: lightGrey,
              },
            ],
          },
          {
            x: "2018",
            y: 6553,
            goals: [
              {
                name: "Expected",
                value: 1400,
                strokeHeight: 5,
                strokeColor: lightGrey,
              },
            ],
          },
        ],
      },
    ],
    chart: {
      type: "bar",
    },
    plotOptions: {
      bar: {
        columnWidth: "60%",
      },
    },
    colors: [primaryOrange],
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
  };

  return (
    <>
      <div className="chart-card">
        <div className="column-chart-container">
          <ReactApexChart
            options={chartOptions}
            series={chartOptions.series}
            type="bar"
            height={300}
            width={600}
          />
        </div>
      </div>
    </>
  );
}
