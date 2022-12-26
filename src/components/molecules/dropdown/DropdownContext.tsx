import { nanoid } from "nanoid";
import { createContext } from "react";

export interface IDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  id: string;
}

/**
 * Context of Dropdown for opening and closing the list and storing ID.
 * @memberof Molecules
 * @exports DropdownContext
 */
export const DropdownContext = createContext<IDropdownProps>({
  isOpen: false,
  onClose: () => undefined,
  id: nanoid(),
});
