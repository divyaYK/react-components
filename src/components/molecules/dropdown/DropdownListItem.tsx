import { ComponentPropsWithoutRef, forwardRef } from "react";
import { StyledDropdownListItem } from "./DropdownStyles";

export const DropdownListItem = forwardRef<
  HTMLLIElement,
  ComponentPropsWithoutRef<"li">
>(({ children }) => (
  <StyledDropdownListItem role="menuitem">{children}</StyledDropdownListItem>
));

DropdownListItem.displayName = "Dropdown.ListItem";
