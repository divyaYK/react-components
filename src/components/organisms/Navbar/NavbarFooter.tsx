import { ComponentPropsWithoutRef, ReactNode, forwardRef } from "react";
import { StyledNavFooter } from "./NavbarStyles";

interface INavbarFooterProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode | ReactNode[];
}

/**
 * Footer component wraps footer content of Navigation bar.
 * @memberof Navbar
 * @exports NavbarFooter
 */
export const NavbarFooter = forwardRef<HTMLDivElement, INavbarFooterProps>(
  ({ children, ...props }, ref) => (
    <StyledNavFooter ref={ref} {...props}>
      {children}
    </StyledNavFooter>
  ),
);
