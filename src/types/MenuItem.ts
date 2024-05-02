import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export type MenuItem = {
  text: string;
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  url: string;
  id: string;
};
