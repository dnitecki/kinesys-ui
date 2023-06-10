import React from "react";
import ChartCard from "../../../../components/chartCard/ChartCard";
import SkeletonLoader from "../../../../components/skeletonLoader/SkeletonLoader";
import "./Overview.scss";
import EditIcon from "@mui/icons-material/Edit";

export default function Overview(props: any) {
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
                  <div className="year-filter">2023</div>
                </div>
              </div>
              {props.data?.response["2023"].map((row: any, index: number) => (
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
