import { ComponentPropsWithoutRef, forwardRef } from "react";
import { StyledNavListItem } from "./NavbarStyles";

export const NavbarListItem = forwardRef<
  HTMLLIElement,
  ComponentPropsWithoutRef<"li">
>(({ children, ...props }) => (
  <StyledNavListItem {...props}>{children}</StyledNavListItem>
));
