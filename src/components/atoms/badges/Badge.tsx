import { ComponentPropsWithoutRef, forwardRef } from "react";
import { StyledBadge } from "./BadgeStyles";

export const Badge = forwardRef<
  HTMLSpanElement,
  ComponentPropsWithoutRef<"span">
>(({ children, ...props }) => <StyledBadge {...props}>{children}</StyledBadge>);
