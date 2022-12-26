import { ComponentPropsWithoutRef, ReactNode, forwardRef } from "react";
import { StyledNavContent } from "./NavbarStyles";

interface INavbarContentProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode | ReactNode[];
}

/**
 * Navbar Content component wraps the list component of navbar.
 * @memberof Navbar
 * @exports NavbarContent
 */
export const NavbarContent = forwardRef<HTMLDivElement, INavbarContentProps>(
  ({ children, ...props }, ref) => (
    <StyledNavContent ref={ref} {...props}>
      {children}
    </StyledNavContent>
  ),
);
