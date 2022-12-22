import { ComponentPropsWithoutRef, ReactNode, forwardRef } from "react";
import { StyledNavList } from "./NavbarStyles";

interface INavbarListProps extends ComponentPropsWithoutRef<"ul"> {
  children: ReactNode | ReactNode[];
}

export const NavbarList = forwardRef<HTMLUListElement, INavbarListProps>(
  ({ children, ...props }) => (
    <StyledNavList {...props}>{children}</StyledNavList>
  ),
);
