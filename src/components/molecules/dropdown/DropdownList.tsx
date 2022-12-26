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

/**
 * List component of Dropdown.
 * @memberof Molecules
 * @exports DropdownList
 */
export const DropdownList = forwardRef<HTMLUListElement, IDropdownList>(
  ({ children, ...props }, ref) => {
    const { isOpen, id } = useContext(DropdownContext);
    return (
      <StyledDropdownList
        id={id}
        ref={ref}
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
