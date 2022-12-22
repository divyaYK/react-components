import { ICONS } from "../../../shared/theme";
import { StyledIcon } from "./StyledIcon";

export interface IIconProps {
  icon: keyof typeof ICONS;
  width?: number | string;
  height?: number | string;
}

export const Icon = ({ icon, width, height }: IIconProps) => (
  <StyledIcon width={width} height={height}>
    {ICONS[icon]}
  </StyledIcon>
);

Icon.defaultProps = {
  width: "auto",
  height: "auto",
};
