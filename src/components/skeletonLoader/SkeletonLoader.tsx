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
              <Avatar sx={{ width: 70, height: 70 }} />
            </Skeleton>
            <Skeleton
              sx={{ display: "flex", height: "100px", width: "100%" }}
              animation="wave"
            />
          </div>
          <Skeleton animation="wave" />
          <Skeleton animation="wave" />
          <Skeleton animation="wave" />
          <Skeleton animation="wave" />
        </div>
        <div className="skeleton-loader">
          <div className="skeleton-loader-top">
            <Skeleton variant="circular">
              <Avatar sx={{ width: 70, height: 70 }} />
            </Skeleton>
            <Skeleton
              sx={{ display: "flex", height: "100px", width: "100%" }}
              animation="wave"
            />
          </div>
          <Skeleton animation="wave" />
          <Skeleton animation="wave" />
          <Skeleton animation="wave" />
          <Skeleton animation="wave" />
        </div>
        <div className="skeleton-loader">
          <div className="skeleton-loader-top">
            <Skeleton variant="circular">
              <Avatar sx={{ width: 70, height: 70 }} />
            </Skeleton>
            <Skeleton
              sx={{ display: "flex", height: "100px", width: "100%" }}
              animation="wave"
            />
          </div>
          <Skeleton animation="wave" />
          <Skeleton animation="wave" />
          <Skeleton animation="wave" />
          <Skeleton animation="wave" />
        </div>
      </div>
    </>
  );
}
