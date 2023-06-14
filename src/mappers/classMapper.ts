import { lightGrey, primaryBlue, primaryOrange } from "../constants/constants";
import { Map } from "../types/CommonTypes";

export const barClassMapper: Map = {
  sales: "bar-sales",
  client: "bar-clients",
  all: "bar-all",
};

export const colorClassMapper: Map = {
  sales: "sales-number",
  client: "client-number",
  all: "all-number",
};

export const cardClassMapper: Map = {
  total: "dark-card",
  undefined: "light-card",
  sales: "light-card",
  client: "light-card",
};

export const radMapper: Map = {
  Goals: "multiRad-bar-large",
  "Statuses Pending": "multiRad-bar-large",
  Overview: "multiRad-bar",
  "Sales Completed": "multiRad-bar",
  Backlog: "multiRad-bar",
};

export const typeColorMapper: Map = {
  client: primaryBlue,
  sales: primaryOrange,
  all: lightGrey,
};
