import React from "react";
import RadialChart from "../charts/radialChart/RadialChart";
import "./ChartCard.scss";
import MultipleRadialChart from "../charts/multipleRadialChart/MultipleRadialChart";
import { cardClassMapper } from "../../mappers/classMapper";

export default function ChartCard({ ...item }: any) {
  const configureChart = (item: any) => {
    if (item.data.radialChart) {
      return <RadialChart {...item.data} />;
    }
    if (item.data.multipleRadial) {
      return <MultipleRadialChart {...item.data} />;
    }
  };

  return (
    <>
      <ul className="chart-card-list">
        <li className={`chart-card ${cardClassMapper[item.data.type]}`}>
          {configureChart(item)}
        </li>
      </ul>
    </>
  );
}
