import React from "react";
import "./Dashboard.scss";
import ChartCard from "../../components/chartCard/ChartCard";
import EastRoundedIcon from "@mui/icons-material/EastRounded";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import AddIcon from "@mui/icons-material/Add";
import { tabItems } from "./tabItems";
import { chartData } from "../../components/chartCard/chartData";
import { getStatusService } from "../../services/dashboardService";
import { useQuery } from "react-query";

export default function Dashboard() {
  const [value, setValue] = React.useState(0);

  const { isLoading, error, data } = useQuery(["status"], getStatusService);
  console.log(data, isLoading, error);

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
            {tabItems.map((item, index) => (
              <Tab key={index} label={item.text} />
            ))}
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
          {value === 1 ? (
            <>
              <section className="page-tiles">
                {chartData?.map((item: any, index: number) => (
                  <ChartCard {...item} key={index} />
                ))}
              </section>
            </>
          ) : null}
        </div>
      </div>
    </>
  );
}
