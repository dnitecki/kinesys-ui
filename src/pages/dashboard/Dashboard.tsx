import React from "react";
import "./Dashboard.scss";
import RadialChart from "../../components/charts/radialChart/RadialChart";

export default function Dashboard() {
  return (
    <>
      <div className="page-container">
        <section>
          <div className="chart-card">
            <div className="chart-card-title">Title</div>
            <RadialChart />
          </div>
        </section>
      </div>
    </>
  );
}
