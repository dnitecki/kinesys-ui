interface Map {
  [key: string]: string | undefined;
}

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
