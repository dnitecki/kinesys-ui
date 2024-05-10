import "./TopBar.scss";
import Avatar from "@mui/material/Avatar";
import { stringAvatar } from "../../utils/helpers/helperFunctions";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchBar from "../searchBar/SearchBar";

const user = {
  name: "Dominick Nitecki",
  role: "CEO",
  permission: "ADMIN",
};

export default function TopBar() {
  return (
    <>
      <header className="topbar-container">
        <div className="topbar-search">
          <SearchBar />
        </div>
        <div className="topbar-cluster-container">
          <div className="topbar-notifications">
            <button>
              <Badge badgeContent={7} color="error">
                <NotificationsIcon sx={{ fontSize: "30px" }} />
              </Badge>
            </button>
          </div>
          <div className="topbar-user">
            <Avatar {...stringAvatar(user.name)} />
            <div className="topbar-user-text">
              <p>{user.name}</p>
              <p>{user.permission}</p>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
