import {
  ComponentPropsWithoutRef,
  ReactNode,
  forwardRef,
  useContext,
} from "react";
import { StyledDropdownList } from "./DropdownStyles";
import { DropdownContext } from "./DropdownContext";

interface IDropdownList extends ComponentPropsWithoutRef<"ul"> {
  children: ReactNode | ReactNode[];
}

export const DropdownList = forwardRef<HTMLUListElement, IDropdownList>(
  ({ children, ...props }) => {
    const { isOpen, id } = useContext(DropdownContext);
    return (
      <StyledDropdownList
        id={id}
        aria-orientation="vertical"
        role="menu"
        isOpen={isOpen}
        {...props}
      >
        {children}
      </StyledDropdownList>
    );
  },
);
DropdownList.displayName = "Dropdown.List";
