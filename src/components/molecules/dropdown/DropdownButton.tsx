import { ComponentPropsWithoutRef, forwardRef, useContext } from "react";
import { Icon } from "../../atoms/icons/Icon";
import {
  StyledDropdownButton,
  StyledDropdownButtonLabel,
  StyledDropdownIcon,
} from "./DropdownStyles";
import { DropdownContext } from "./DropdownContext";

interface IDropdownButton extends ComponentPropsWithoutRef<"button"> {
  label: string;
}

export const DropdownButton = forwardRef<HTMLButtonElement, IDropdownButton>(
  ({ label, ...props }: IDropdownButton) => {
    const { onClose, isOpen, id } = useContext(DropdownContext);
    return (
      <StyledDropdownButton
        type="button"
        aria-controls={id}
        aria-expanded={isOpen}
        aria-haspopup="menu"
        aria-label={label}
        onClick={onClose}
        {...props}
      >
        <StyledDropdownButtonLabel>{label}</StyledDropdownButtonLabel>
        <StyledDropdownIcon>
          <Icon icon={isOpen ? "ChevronUp" : "ChevronDown"} />
        </StyledDropdownIcon>
      </StyledDropdownButton>
    );
  },
);

DropdownButton.displayName = "Dropdown.Button";
