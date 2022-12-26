import {
  ComponentPropsWithoutRef,
  ReactNode,
  forwardRef,
  useContext,
} from "react";
import { StyledNavbarWrapper } from "./NavbarStyles";
import { NavbarContext } from "./NavbarContext";

interface INavbarWrapperProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode | ReactNode[];
}

/**
 * Wrapper component for Navigation bar.
 * @memberof Navbar
 * @exports NavbarWrapper
 */
export const NavbarWrapper = forwardRef<HTMLDivElement, INavbarWrapperProps>(
  ({ children, ...props }, ref) => {
    const { isOpen } = useContext(NavbarContext);
    return (
      <StyledNavbarWrapper ref={ref} isOpen={isOpen} {...props}>
        {children}
      </StyledNavbarWrapper>
    );
  },
);
