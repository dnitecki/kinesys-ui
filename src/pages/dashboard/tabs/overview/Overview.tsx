import React from "react";
import ChartCard from "../../../../components/chartCard/ChartCard";
import SkeletonLoader from "../../../../components/skeletonLoader/SkeletonLoader";
import "./Overview.scss";
import EditIcon from "@mui/icons-material/Edit";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";

export default function Overview(props: any) {
  const [year, setYear] = React.useState("2023");

  const handleChange = (event: any) => {
    setYear(event.target.value as string);
  };

  return (
    <>
      {props.isLoading ? (
        <div className="page-skeleton">
          <SkeletonLoader />
          <SkeletonLoader />
        </div>
      ) : (
        <>
          <div className="page-content-scroll">
            <div className="page-tiles-container">
              <div className="page-section-header">
                <div className="page-section-header-text">
                  {props.data?.headerText}
                </div>
                <div className="page-section-header-menu">
                  <button className="edit-goals-button">
                    Edit Goals
                    <EditIcon />
                  </button>
                  <div className="year-filter">
                    <FormControl>
                      <InputLabel
                        variant="outlined"
                        id="simple-select-helper-label"
                      >
                        Year
                      </InputLabel>
                      <Select
                        labelId="simple-select-helper-label"
                        id="simple-select-helper"
                        value={year}
                        label="Age"
                        variant="outlined"
                        onChange={handleChange}
                      >
                        <MenuItem value={2023}>2023</MenuItem>
                        <MenuItem value={2022}>2022</MenuItem>
                        <MenuItem value={2021}>2021</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </div>
              </div>
              {props.data?.response[year].map((row: any, index: number) => (
                <section className="page-tiles" key={index}>
                  {row.data.map((item: any, index: number) => (
                    <ChartCard {...item} key={index} />
                  ))}
                </section>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
}
