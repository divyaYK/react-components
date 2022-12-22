import { ComponentPropsWithoutRef, forwardRef } from "react";
import { StyledDropdownListItem } from "./DropdownStyles";

export const DropdownListItem = forwardRef<
  HTMLLIElement,
  ComponentPropsWithoutRef<"li">
>(({ children, ...props }) => (
  <StyledDropdownListItem role="menuitem" {...props}>
    {children}
  </StyledDropdownListItem>
));

DropdownListItem.displayName = "Dropdown.ListItem";
