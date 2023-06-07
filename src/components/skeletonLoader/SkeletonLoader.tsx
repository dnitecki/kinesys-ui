import React from "react";
import Skeleton from "@mui/material/Skeleton";
import "./SkeletonLoader.scss";

export default function SkeletonLoader() {
  return (
    <>
      <div className="skeleton-loader">
        <Skeleton sx={{ height: "100px" }} />
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </div>
    </>
  );
}
