import { ComponentPropsWithoutRef, ReactNode, forwardRef } from "react";
import { StyledNavContent } from "./NavbarStyles";

interface INavbarContentProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode | ReactNode[];
}

export const NavbarContent = forwardRef<HTMLDivElement, INavbarContentProps>(
  ({ children, ...props }) => (
    <StyledNavContent {...props}>{children}</StyledNavContent>
  ),
);
