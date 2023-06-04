import React from "react";
import ChartCard from "../../../../components/chartCard/ChartCard";

export default function Status({ ...data }: any) {
  return (
    <div>
      <section className="page-tiles">
        {data
          ? data?.map((item: any, index: number) => (
              <ChartCard {...item} key={index} />
            ))
          : null}
      </section>
    </div>
  );
}
