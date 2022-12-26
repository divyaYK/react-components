import { ComponentPropsWithoutRef, forwardRef } from "react";
import { ICONS } from "../../../shared/theme";
import { StyledIcon } from "./StyledIcon";

export interface IIconProps extends ComponentPropsWithoutRef<"div"> {
  icon: keyof typeof ICONS;
  width?: number | string;
  height?: number | string;
  color?: string;
}

/**
 * All SVGs components.
 * @memberof Atoms
 * @exports Icon
 */
export const Icon = forwardRef<HTMLDivElement, IIconProps>(
  ({
    icon, width, height, color, ...props
  }, ref) => (
    <StyledIcon
      ref={ref}
      color={color}
      width={width}
      height={height}
      {...props}
    >
      {ICONS[icon]}
    </StyledIcon>
  ),
);

Icon.defaultProps = {
  width: "auto",
  height: "auto",
  color: "inherit",
};
