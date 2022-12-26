import { ComponentPropsWithoutRef, forwardRef } from "react";
import { StyledBadge } from "./BadgeStyles";

/**
 * Badge component for displaying categories.
 * @memberof Atoms
 * @exports Badge
 */
export const Badge = forwardRef<
  HTMLSpanElement,
  ComponentPropsWithoutRef<"span">
>(({ children, ...props }, ref) => (
  <StyledBadge ref={ref} {...props}>
    {children}
  </StyledBadge>
));
