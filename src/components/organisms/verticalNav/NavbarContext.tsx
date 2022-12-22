import { nanoid } from "nanoid";
import { createContext } from "react";

export interface INavbarProps {
  isOpen: boolean;
  onClose: () => void;
  id: string;
}

export const NavbarContext = createContext<INavbarProps>({
  isOpen: false,
  onClose: () => undefined,
  id: nanoid(),
});
