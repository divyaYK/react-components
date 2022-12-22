import { ComponentPropsWithoutRef, ReactNode, forwardRef } from "react";
import { StyledNavLink } from "./NavbarStyles";

interface INavbarLinkProps extends ComponentPropsWithoutRef<"a"> {
  children: ReactNode | ReactNode[];
}

export const NavbarLink = forwardRef<HTMLAnchorElement, INavbarLinkProps>(
  ({ children, ...props }) => (
    <StyledNavLink {...props}>{children}</StyledNavLink>
  ),
);
