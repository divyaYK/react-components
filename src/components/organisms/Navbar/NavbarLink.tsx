import {
  ComponentPropsWithoutRef,
  ElementType,
  ReactNode,
  forwardRef,
} from "react";
import { StyledNavLink } from "./NavbarStyles";

interface INavbarLinkProps extends ComponentPropsWithoutRef<"a"> {
  children: ReactNode | ReactNode[] | JSX.Element | JSX.Element[];
  asProp?: ElementType;
}

/**
 * Link component for Navigation bar.
 * @memberof Navbar
 * @exports NavbarLink
 */
export const NavbarLink = forwardRef<HTMLAnchorElement, INavbarLinkProps>(
  ({ children, asProp, ...props }, ref) => (
    <StyledNavLink ref={ref} as={asProp} {...props}>
      {children}
    </StyledNavLink>
  ),
);
NavbarLink.defaultProps = {
  asProp: "a",
};
