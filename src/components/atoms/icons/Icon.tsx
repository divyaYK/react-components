import { ICONS } from "../../../shared/theme";
import { StyledIcon } from "./StyledIcon";

export interface IIconProps {
  icon: keyof typeof ICONS;
}

export const Icon = ({ icon }: IIconProps) => (
  <StyledIcon>{ICONS[icon]}</StyledIcon>
);
