import { ComponentPropsWithoutRef, ReactNode, forwardRef } from "react";
import { StyledNavBrand } from "./NavbarStyles";

interface INavbarBrandProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode | ReactNode[];
}

/**
 * Brand component to display logo in Navigation bar.
 * @memberof Navbar
 * @exports NavbarBrand
 */
export const NavbarBrand = forwardRef<HTMLDivElement, INavbarBrandProps>(
  ({ children, ...props }, ref) => (
    <StyledNavBrand ref={ref} {...props}>
      {children}
    </StyledNavBrand>
  ),
);
