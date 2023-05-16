import React from "react";
import "./Dashboard.scss";
import ChartCard from "../../components/chartCard/ChartCard";
import EastRoundedIcon from "@mui/icons-material/EastRounded";

export default function Dashboard() {
  return (
    <>
      <div className="page-container">
        <section className="page-heading-link">
          <a href="market">View Pipeline Date</a>
          <EastRoundedIcon />
        </section>
        <section className="page-tiles">
          <ChartCard />
        </section>
      </div>
    </>
  );
}
