import React from "react";
import RadialChart from "../charts/radialChart/RadialChart";
import "./ChartCard.scss";
import MultipleRadialChart from "../charts/multipleRadialChart/MultipleRadialChart";
import { cardClassMapper } from "../../mappers/classMapper";

export default function ChartCard({ ...item }: any) {
  const configureChart = (item: any) => {
    if (item.radialChart) {
      return <RadialChart {...item} />;
    }
    if (item.multipleRadial) {
      return <MultipleRadialChart {...item} />;
    }
  };

  return (
    <>
      <ul className="chart-card-list">
        <li className={`chart-card ${cardClassMapper[item.type]}`}>
          {configureChart(item)}
        </li>
      </ul>
    </>
  );
}
