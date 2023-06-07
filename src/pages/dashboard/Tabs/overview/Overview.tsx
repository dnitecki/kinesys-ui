import React from "react";
import ChartCard from "../../../../components/chartCard/ChartCard";
import SkeletonLoader from "../../../../components/skeletonLoader/SkeletonLoader";

export default function Overview(props: any) {
  const isLoading = true;
  return (
    <>
      {isLoading ? (
        <div className="page-skeleton">
          <SkeletonLoader />
          <SkeletonLoader />
        </div>
      ) : (
        <section className="page-tiles">
          {props.data?.map((item: any, index: number) => (
            <ChartCard {...item} key={index} />
          ))}
        </section>
      )}
    </>
  );
}
