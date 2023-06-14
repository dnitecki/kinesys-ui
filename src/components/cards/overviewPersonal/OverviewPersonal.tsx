import React from "react";
import MultipleRadialChart from "../../charts/multipleRadialChart/MultipleRadialChart";
import ColumnChart from "../../charts/columnChart/ColumnChart";

export default function OverviewPersonal({ ...data }) {
  return (
    <>
      <div className="chart-card-container">
        <MultipleRadialChart {...data?.overviewPersonal} />
        <ColumnChart {...data?.overviewPersonal} />
      </div>
    </>
  );
}
