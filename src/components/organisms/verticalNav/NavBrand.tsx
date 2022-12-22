import { ComponentPropsWithoutRef, ReactNode, forwardRef } from "react";
import { StyledNavBrand } from "./NavbarStyles";

interface INavbarBrandProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode | ReactNode[];
}

export const NavbarBrand = forwardRef<HTMLDivElement, INavbarBrandProps>(
  ({ children, ...props }) => (
    <StyledNavBrand {...props}>{children}</StyledNavBrand>
  ),
);
