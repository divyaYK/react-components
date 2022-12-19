import {
  FC, ReactNode, useCallback, useMemo, useState,
} from "react";
import { DropdownContext } from "./DropdownContext";
import { DropdownButton } from "./DropdownButton";
import { DropdownList } from "./DropdownList";
import { DropdownListItem } from "./DropdownListItem";
import { useUniqueId } from "../../../hooks/useUniqueId";
import { StyledDropdownWrapper } from "./DropdownStyles";

interface IDropdownComponentProps {
  children: ReactNode | ReactNode[];
}

interface IDropdownCompositionProps {
  Button: typeof DropdownButton;
  List: typeof DropdownList;
  Item: typeof DropdownListItem;
}

export const Dropdown: FC<IDropdownComponentProps> &
  IDropdownCompositionProps = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const onClose = useCallback(() => {
      setIsOpen(!isOpen);
    }, [isOpen]);
    const id = useUniqueId();
    const context = useMemo(
      () => ({
        isOpen,
        onClose,
        id,
      }),
      [isOpen, onClose, id],
    );
    return (
      <DropdownContext.Provider value={context}>
        <StyledDropdownWrapper>{children}</StyledDropdownWrapper>
      </DropdownContext.Provider>
    );
  };

Dropdown.Button = DropdownButton;
Dropdown.List = DropdownList;
Dropdown.Item = DropdownListItem;
