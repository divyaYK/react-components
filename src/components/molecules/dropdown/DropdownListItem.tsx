import { ComponentPropsWithoutRef, forwardRef } from "react";
import { StyledDropdownListItem } from "./DropdownStyles";

/**
 * List Item component of Dropdown.
 * @memberof Molecules
 * @exports DropdownListItem
 */
export const DropdownListItem = forwardRef<
  HTMLLIElement,
  ComponentPropsWithoutRef<"li">
>(({ children, ...props }, ref) => (
  <StyledDropdownListItem ref={ref} role="menuitem" {...props}>
    {children}
  </StyledDropdownListItem>
));

DropdownListItem.displayName = "Dropdown.ListItem";
