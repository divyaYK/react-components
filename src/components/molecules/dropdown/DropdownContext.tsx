import { nanoid } from "nanoid";
import { createContext } from "react";

export interface IDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  id: string;
}

export const DropdownContext = createContext<IDropdownProps>({
  isOpen: false,
  onClose: () => undefined,
  id: nanoid(),
});
