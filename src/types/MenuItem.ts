import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export type MenuItemType = {
  text: string;
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  url: string;
  id: string;
};
