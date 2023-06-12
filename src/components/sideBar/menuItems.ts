import HolidayVillageIcon from "@mui/icons-material/HolidayVillage";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupsIcon from "@mui/icons-material/Groups";
import TaskIcon from "@mui/icons-material/Task";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import { MenuItem } from "../../types/MenuItem";

export const menuItems: MenuItem[] = [
  {
    text: "Dashboard",
    icon: DashboardIcon,
    url: "dashboard",
  },
  {
    text: "Market",
    icon: HolidayVillageIcon,
    url: "market",
  },
  {
    text: "Teams",
    icon: GroupsIcon,
    url: "teams",
  },
  {
    text: "Catalog",
    icon: ImportContactsIcon,
    url: "catalog",
  },
  {
    text: "Tasks",
    icon: TaskIcon,
    url: "tasks",
  },
];

export const subMenu: MenuItem[] = [
  {
    text: "Profile",
    icon: AccountCircleIcon,
    url: "profile",
  },
  {
    text: "Settings",
    icon: SettingsIcon,
    url: "settings",
  },
];
