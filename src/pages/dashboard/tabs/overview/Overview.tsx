import SkeletonLoader from "../../../../components/skeletonLoader/SkeletonLoader";
import "./Overview.scss";
import EditIcon from "@mui/icons-material/Edit";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import {
  primaryOrange,
  secondaryOrange,
} from "../../../../constants/constants";
import { useState } from "react";
import { overviewMapper } from "../../../../mappers/overviewMapper";
import {
  Chart,
  Section,
} from "../../../../types/mapperTypes/overviewMapperTypes";
import { OverviewResponseType } from "../../../../types/responseTypes/OverviewResponseTypes";
import { ChartPropsType } from "../../../../types/ChartDataTypes";

export default function Overview(props: any) {
  const [year, setYear] = useState("2023");
  const handleChange = (event: any) => {
    setYear(event.target.value as string);
  };

  const getYearRange = (data: OverviewResponseType) => {
    let yearRange = [];
    yearRange = data ? Object.keys(data) : [];
    return yearRange.sort().reverse();
  };

  const chartProps: ChartPropsType = {
    chartData: props?.data?.response[year],
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
                      {getYearRange(props?.data?.response).map(
                        (year: string, index: number) => (
                          <MenuItem value={year} key={index}>
                            {year}
                          </MenuItem>
                        )
                      )}
                    </Select>
                  </FormControl>
                </div>
              </div>
            </div>
            {overviewMapper.sections.map((section: Section, index: number) => (
              <>
                <div
                  className="page-section-header-text"
                  key={section.headerText}
                >
                  <div>{section.headerText}</div>
                </div>
                <section className="page-tiles" key={index}>
                  {section.charts.map((chart: Chart, index: number) => (
                    <div className="chart-card">
                      <chart.Component key={index} chartData={chartProps} />
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
