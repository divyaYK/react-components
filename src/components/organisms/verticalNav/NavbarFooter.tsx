import { ComponentPropsWithoutRef, ReactNode, forwardRef } from "react";
import { StyledNavFooter } from "./NavbarStyles";

interface INavbarFooterProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode | ReactNode[];
}

export const NavbarFooter = forwardRef<HTMLDivElement, INavbarFooterProps>(
  ({ children, ...props }) => (
    <StyledNavFooter {...props}>{children}</StyledNavFooter>
  ),
);
