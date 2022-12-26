import { ComponentPropsWithoutRef, ReactNode, forwardRef } from "react";
import { StyledTabGroup } from "./TabStyles";

interface ITabGroupProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode | ReactNode[];
}

/**
 * TabGroup Component that wraps all tabs.
 * @memberof Molecules
 * @exports TabGroup
 */
export const TabGroup = forwardRef<HTMLDivElement, ITabGroupProps>(
  ({ children, ...props }) => (
    <StyledTabGroup {...props}>{children}</StyledTabGroup>
  ),
);
