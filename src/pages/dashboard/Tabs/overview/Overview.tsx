import React from "react";
import ChartCard from "../../../../components/chartCard/ChartCard";

export default function Overview({ data }: any) {
  return (
    <>
      <section className="page-tiles">
        {data?.map((item: any, index: number) => (
          <ChartCard {...item} key={index} />
        ))}
      </section>
    </>
  );
}
