import React from "react";
import "./Dashboard.scss";
import ChartCard from "../../components/chartCard/ChartCard";

export default function Dashboard() {
  return (
    <>
      <div className="page-container">
        <section className="page-tiles">
          <ChartCard />
        </section>
      </div>
    </>
  );
}
