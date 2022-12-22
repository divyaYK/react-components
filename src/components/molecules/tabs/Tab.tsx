import { ComponentPropsWithoutRef, forwardRef } from "react";
import { StyledTab } from "./TabStyles";

interface ITabProps extends ComponentPropsWithoutRef<"div"> {
  isActive: boolean;
}

export const Tab = forwardRef<HTMLDivElement, ITabProps>(
  ({ children, isActive, ...props }) => (
    <StyledTab className={isActive ? "active" : ""} {...props}>
      {children}
    </StyledTab>
  ),
);
