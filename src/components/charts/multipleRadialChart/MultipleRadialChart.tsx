import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import "./MultipleRadialChart.scss";
import {
  ChartPropsType,
  MultipleRadialData,
} from "../../../types/ChartDataTypes";
import {
  barClassMapper,
  colorClassMapper,
  typeColorMapper,
} from "../../../mappers/classMapper";
import { trackColor } from "../../../constants/constants";

const MultipleRadialChart: React.FC<ChartPropsType> = ({ chartData }) => {
  console.log(chartData);
  const data = {
    title: "Sales Completed",
    values: [
      {
        series: 89,
        label: "$12,250,000",
        type: "sales",
      },
    ],
  };
  const series = data.values.map(
    (element: { series: number }) => element.series
  );

  const colors = data.values.map(
    (item: { type: string }) => typeColorMapper[item.type]
  );

  const radialSize = (data: any) => {
    if (data.values.length > 1) {
      return "50%";
    }
    return "70%";
  };

  const radialHeight = (data: any) => {
    if (data.values.length > 1) {
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
            <div className="chart-card-title">{data.title}</div>
            <div className="multiRad-bars-container">
              {data.values.map((item: MultipleRadialData, index: number) => (
                <div className="multiRad-bar" key={index}>
                  <div className={`multiRad-bar ${barClassMapper[item.type]}`}>
                    {item.label}
                  </div>
                  <div className={`${colorClassMapper[item.type]}`}>
                    {item.series}%
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MultipleRadialChart;
