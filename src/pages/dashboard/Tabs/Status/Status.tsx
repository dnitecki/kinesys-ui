import React from "react";
import ChartCard from "../../../../components/chartCard/ChartCard";

export default function status({ ...data }) {
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
