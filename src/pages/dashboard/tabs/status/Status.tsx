import React from "react";
import ChartCard from "../../../../components/chartCard/ChartCard";
import EastRoundedIcon from "@mui/icons-material/EastRounded";
import SkeletonLoader from "../../../../components/skeletonLoader/SkeletonLoader";

export default function Status(props: any) {
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
              <section className="page-heading-link">
                <a href="market">View Pipeline Data</a>
                <EastRoundedIcon />
              </section>
              <section className="page-tiles">
                {props.data?.map((item: any, index: number) => (
                  <ChartCard {...item} key={index} />
                ))}
              </section>
            </div>
          </div>
        </>
      )}
    </>
  );
}
