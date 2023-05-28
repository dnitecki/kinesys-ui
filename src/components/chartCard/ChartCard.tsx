import React from "react";
import RadialChart from "../charts/radialChart/RadialChart";
import "./ChartCard.scss";

export default function ChartCard({ ...item }: any) {
  return (
    <>
      <ul className="chart-card-list">
        <li
          className={`chart-card ${
            item.data.title === "Total Statuses" ? "dark-card" : "light-card"
          }`}
        >
          <div className="chart-card-title">{item.data.title}</div>
          {item.data.radialChart ? <RadialChart {...item.data} /> : null}
        </li>
      </ul>
    </>
  );
}
