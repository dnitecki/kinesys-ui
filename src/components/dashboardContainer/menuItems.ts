import HomeIcon from "@mui/icons-material/Home";
import DashboardIcon from "@mui/icons-material/Dashboard";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export const menuItems: MenuItem[] = [
  {
    text: "Home",
    icon: HomeIcon,
    url: "",
  },
  {
    text: "Dashboard",
    icon: DashboardIcon,
    url: "",
  },
  {
    text: "Performance",
    icon: QueryStatsIcon,
    url: "",
  },
];

export const subMenu: MenuItem[] = [
  {
    text: "Profile",
    icon: AccountCircleIcon,
    url: "",
  },
  {
    text: "Settings",
    icon: SettingsIcon,
    url: "",
  },
];

export type MenuItem = {
  text: string;
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  url: string;
};
