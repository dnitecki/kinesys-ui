import React from "react";
import Skeleton from "@mui/material/Skeleton";
import Avatar from "@mui/material/Avatar";
import "./SkeletonLoader.scss";

export default function SkeletonLoader() {
  return (
    <>
      <div className="skeleton-loader-container">
        <div className="skeleton-loader">
          <div className="skeleton-loader-top">
            <Skeleton variant="circular">
              <Avatar sx={{ width: 56, height: 56 }} />
            </Skeleton>
            <Skeleton
              sx={{ display: "flex", height: "100px", width: "100%" }}
            />
          </div>
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
        <div className="skeleton-loader">
          <div className="skeleton-loader-top">
            <Skeleton variant="circular">
              <Avatar sx={{ width: 56, height: 56 }} />
            </Skeleton>
            <Skeleton
              sx={{ display: "flex", height: "100px", width: "100%" }}
            />
          </div>
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
        <div className="skeleton-loader">
          <div className="skeleton-loader-top">
            <Skeleton variant="circular">
              <Avatar sx={{ width: 56, height: 56 }} />
            </Skeleton>
            <Skeleton
              sx={{ display: "flex", height: "100px", width: "100%" }}
            />
          </div>
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      </div>
    </>
  );
}
