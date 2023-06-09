import React from "react";
import ChartCard from "../../../../components/chartCard/ChartCard";
import SkeletonLoader from "../../../../components/skeletonLoader/SkeletonLoader";

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
          {" "}
          <div className="page-content-scroll">
            <div className="page-tiles-container">
              {props.data?.map((row: any, index: number) => (
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
