import React from "react";
import "./Dashboard.scss";
import ChartCard from "../../components/chartCard/ChartCard";
import EastRoundedIcon from "@mui/icons-material/EastRounded";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import AddIcon from "@mui/icons-material/Add";

export default function Dashboard() {
  const [value, setValue] = React.useState(0);

  return (
    <>
      <div className="page-container">
        <section className="page-header">
          <Tabs
            className="page-tabs"
            value={value}
            textColor="primary"
            indicatorColor="primary"
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <Tab label="Overview" />
            <Tab label="Status" />
            <Tab label="Sales Pipeline" />
            <Tab label="Clients" />
          </Tabs>
          <div className="page-header-buttons">
            <button className="new-client-button">
              <AddIcon />
              Add New Client
            </button>
            <button className="new-estimate-button">
              <AddIcon />
              Add New Estimate
            </button>
          </div>
        </section>
        <div className="page-content">
          <section className="page-heading-link">
            <a href="market">View Pipeline Data</a>
            <EastRoundedIcon />
          </section>
          {value === 0 ? (
            <section className="page-tiles">
              <ChartCard />
            </section>
          ) : null}
        </div>
      </div>
    </>
  );
}
