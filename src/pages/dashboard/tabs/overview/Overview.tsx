import React from "react";
import ChartCard from "../../../../components/chartCard/ChartCard";
import SkeletonLoader from "../../../../components/skeletonLoader/SkeletonLoader";
import "./Overview.scss";
import EditIcon from "@mui/icons-material/Edit";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import {
  primaryOrange,
  secondaryOrange,
} from "../../../../constants/constants";

export default function Overview(props: any) {
  const [year, setYear] = React.useState("2023");
  const handleChange = (event: any) => {
    setYear(event.target.value as string);
  };
  const yearRange: string[] = Object.keys(props.data?.personal.response || {})
    .sort()
    .reverse();

  return (
    <>
      {props.isLoading ? (
        <div className="page-skeleton">
          <SkeletonLoader />
          <SkeletonLoader />
        </div>
      ) : (
        <>
          <div className="page-tiles-container">
            <div className="page-section-header">
              <div className="page-section-header-text">
                {props.data?.personal.headerText}
              </div>
              <div className="page-section-header-menu">
                <button className="app-button">
                  Edit Goals
                  <EditIcon />
                </button>
                <div className="year-filter">
                  <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel variant="outlined">Year</InputLabel>
                    <Select
                      value={year}
                      label="Year"
                      variant="outlined"
                      onChange={handleChange}
                      IconComponent={ExpandMoreIcon}
                      sx={{
                        borderRadius: "5px",
                        "&&:hover .MuiOutlinedInput-notchedOutline": {
                          borderColor: primaryOrange,
                        },
                      }}
                      MenuProps={{
                        sx: {
                          "&& .Mui-selected": {
                            color: primaryOrange,
                            fontWeight: "bold",
                            backgroundColor: secondaryOrange,
                          },
                          "&&:hover .Mui-selected": {
                            backgroundColor: secondaryOrange,
                          },
                        },
                      }}
                    >
                      {yearRange?.map((year: string, index: number) => (
                        <MenuItem value={year} key={index}>
                          {year}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
              </div>
            </div>
            {props.data?.personal.response[year].map(
              (row: any, index: number) => (
                <section className="page-tiles" key={index}>
                  {row.data.map((item: any, index: number) => (
                    <ChartCard {...item} key={index} />
                  ))}
                </section>
              )
            )}
            <div className="page-section-header">
              <div className="page-section-header-text">
                {props.data?.market.headerText}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
