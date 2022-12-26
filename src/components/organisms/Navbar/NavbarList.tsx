import { ComponentPropsWithoutRef, ReactNode, forwardRef } from "react";
import { StyledNavList } from "./NavbarStyles";

interface INavbarListProps extends ComponentPropsWithoutRef<"ul"> {
  children: ReactNode | ReactNode[];
}

/**
 * List component for Navigation bar.
 * @memberof Navbar
 * @exports NavbarList
 */
export const NavbarList = forwardRef<HTMLUListElement, INavbarListProps>(
  ({ children, ...props }, ref) => (
    <StyledNavList ref={ref} {...props}>
      {children}
    </StyledNavList>
  ),
);
