import React from "react";
import RadialChart from "../charts/radialChart/RadialChart";
import "./ChartCard.scss";
import MultipleRadialChart from "../charts/multipleRadialChart/MultipleRadialChart";
import { cardClassMapper } from "../../mappers/classMapper";

export default function ChartCard({ ...item }: any) {
  return (
    <>
      <ul className="chart-card-list">
        <li className={`chart-card ${cardClassMapper[item.data.type]}`}>
          {item.data.radialChart ? <RadialChart {...item.data} /> : null}
          {item.data.multipleRadial ? (
            <MultipleRadialChart {...item.data} />
          ) : null}
        </li>
      </ul>
    </>
  );
}
