import { ComponentPropsWithoutRef, forwardRef } from "react";
import { StyledTab } from "./TabStyles";

interface ITabProps extends ComponentPropsWithoutRef<"div"> {
  isActive: boolean;
}

/**
 * Tab Component to switch between UI contents
 * @memberof Molecules
 * @exports Tab
 */
export const Tab = forwardRef<HTMLDivElement, ITabProps>(
  ({ children, isActive, ...props }, ref) => (
    <StyledTab ref={ref} className={isActive ? "active" : ""} {...props}>
      {children}
    </StyledTab>
  ),
);
