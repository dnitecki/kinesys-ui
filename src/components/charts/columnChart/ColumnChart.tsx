import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts/";
import EastRoundedIcon from "@mui/icons-material/EastRounded";
import { chartFillColorByType } from "../../../utils/helpers/helperFunctions";
import "./ColumnChart.scss";

export default function ColumnChart({ ...data }: any) {
  const response = {
    title: "Monthly",
    type: "client",
    values: [
      {
        series: [44, 55, 57, 56, 61, 58, 63, 60, 66, 61, 66, 59],
        label: "Sales",
      },
      {
        series: [100, 98, 84, 100, 85, 77, 102, 87, 76, 82, 85, 99],
        label: "Clients",
      },
      {
        series: [35, 41, 36, 26, 45, 48, 52, 53, 41, 63, 60, 66],
        label: "Goal",
      },
    ],
  };
  const series = response.values.map((item: any) => {
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
        borderRadiusApplication: "end",
        borderRadius: 4,
        horizontal: false,
        columnWidth: "50%",
        barHeight: "100%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
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
      colors: chartFillColorByType(data?.type),
    },
  };

  return (
    <>
      <div className="chart-card-container">
        <div className="column-card-label">
          <div className="chart-card-title">{data.title}</div>
          <div className="app-button">
            <button>View Status</button>
            <EastRoundedIcon />
          </div>
        </div>
        <div className="column-chart-container">
          <ReactApexChart
            options={chartOptions}
            series={chartOptions.series}
            type="bar"
            height={250}
            width={800}
          />
        </div>
      </div>
    </>
  );
}
