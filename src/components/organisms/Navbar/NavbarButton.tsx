import {
  ComponentPropsWithoutRef,
  ReactNode,
  forwardRef,
  useContext,
} from "react";
import {
  StyledNavCollapseButton,
  IStyledNavCollapseButton,
} from "./NavbarStyles";
import { NavbarContext } from "./NavbarContext";

interface INavbarButtonProps
  extends ComponentPropsWithoutRef<"button">,
    IStyledNavCollapseButton {
  children: ReactNode | ReactNode[] | JSX.Element;
  color: string;
}

/**
 * Button component for Navigation bar.
 * @memberof Navbar
 * @exports NavbarButton
 */
export const NavbarButton = forwardRef<HTMLButtonElement, INavbarButtonProps>(
  ({ children, ...props }, ref) => {
    const { isOpen, onClose, id } = useContext(NavbarContext);
    return (
      <StyledNavCollapseButton
        ref={ref}
        aria-controls={id}
        aria-expanded={isOpen}
        onClick={onClose}
        aria-label="Toggle navigation"
        {...props}
      >
        {children}
      </StyledNavCollapseButton>
    );
  },
);
