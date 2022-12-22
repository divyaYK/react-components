import { ComponentPropsWithoutRef, ReactNode, forwardRef } from "react";
import { StyledTabGroup } from "./TabStyles";

interface ITabGroupProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode | ReactNode[];
}

export const TabGroup = forwardRef<HTMLDivElement, ITabGroupProps>(
  ({ children, ...props }) => (
    <StyledTabGroup {...props}>{children}</StyledTabGroup>
  ),
);
