import ColumnChart from "../components/charts/columnChart/ColumnChart";
import MultipleRadialChart from "../components/charts/multipleRadialChart/MultipleRadialChart";
import { OverviewMapper } from "../types/mapperTypes/overviewMapperTypes";

export const overviewMapper: OverviewMapper = {
  sections: [
    {
      headerText: "Your Goals",
      charts: [
        {
          Component: MultipleRadialChart,
        },
        {
          Component: MultipleRadialChart,
        },
        {
          Component: MultipleRadialChart,
        },
      ],
    },
    {
      headerText: "Managed Goals",
      charts: [
        {
          Component: MultipleRadialChart,
        },
        {
          Component: ColumnChart,
        },
      ],
    },
  ],
};
