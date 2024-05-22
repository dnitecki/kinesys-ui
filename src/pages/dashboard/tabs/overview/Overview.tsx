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
import BarChart from "../../../../components/charts/barChart/BarChart";
import { useState } from "react";
import { overviewMapper } from "../../../../mappers/overviewMapper";
import {
  Chart,
  Section,
} from "../../../../types/mapperTypes/overviewMapperTypes";

export default function Overview(props: any) {
  const [year, setYear] = useState("2023");
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
            {overviewMapper.sections.map((section: Section, index: number) => (
              <>
                <div className="page-section-header-text">
                  {section.headerText}
                </div>
                <section className="page-tiles" key={index}>
                  {section.charts.map((chart: Chart, index: number) => (
                    <div className="chart-card">
                      <chart.Component key={index} />
                    </div>
                  ))}
                </section>
              </>
            ))}
          </div>
        </>
      )}
    </>
  );
}
