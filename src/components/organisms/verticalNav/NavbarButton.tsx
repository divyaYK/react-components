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
  children: ReactNode | ReactNode[];
  color: string;
}

export const NavbarButton = forwardRef<HTMLDivElement, INavbarButtonProps>(
  ({ children, ...props }) => {
    const { isOpen, onClose, id } = useContext(NavbarContext);
    return (
      <StyledNavCollapseButton
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
