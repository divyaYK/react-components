import { ComponentPropsWithoutRef, forwardRef } from "react";
import { StyledNavListItem } from "./NavbarStyles";

/**
 * List Item component for Navigation bar.
 * @memberof Navbar
 * @exports NavbarListItem
 */
export const NavbarListItem = forwardRef<
  HTMLLIElement,
  ComponentPropsWithoutRef<"li">
>(({ children, ...props }, ref) => (
  <StyledNavListItem ref={ref} {...props}>
    {children}
  </StyledNavListItem>
));
