import RadialChart from "../charts/radialChart/RadialChart";
import "./ChartCard.scss";
import MultipleRadialChart from "../charts/multipleRadialChart/MultipleRadialChart";
import ColumnChart from "../charts/columnChart/ColumnChart";
import OverviewPersonal from "../cards/overviewPersonal/OverviewPersonal";

export default function ChartCard({ ...item }: any) {
  const configureChart = (item: any) => {
    if (item.radialChart) {
      return <RadialChart {...item} />;
    }
    if (item.multipleRadial) {
      return <MultipleRadialChart {...item} />;
    }
    if (item.columnChart) {
      return <ColumnChart {...item} />;
    }
    if (item.overviewPersonal) {
      return <OverviewPersonal {...item} />;
    }
  };

  return (
    <>
      <ul className="chart-card-list">
        <li className="chart-card">{configureChart(item)}</li>
      </ul>
    </>
  );
}
