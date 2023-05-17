import React from "react";
import RadialChart from "../charts/radialChart/RadialChart";
import { chartData } from "./chartData";
import "./ChartCard.scss";

export default function ChartCard() {
  return (
    <>
      <ul className="chart-card-list">
        {chartData.map((item, index) => (
          <li
            className={`chart-card ${
              item.data.title === "Total Statuses" ? "dark-card" : "light-card"
            }`}
            key={index}
          >
            <div className="chart-card-title">{item.data.title}</div>
            {item.data.radialChart ? <RadialChart {...item.data} /> : null}
          </li>
        ))}
      </ul>
    </>
  );
}
