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

export const NavbarWrapper = forwardRef<HTMLDivElement, INavbarWrapperProps>(
  ({ children, ...props }) => {
    const { isOpen } = useContext(NavbarContext);
    return (
      <StyledNavbarWrapper isOpen={isOpen} {...props}>
        {children}
      </StyledNavbarWrapper>
    );
  },
);
