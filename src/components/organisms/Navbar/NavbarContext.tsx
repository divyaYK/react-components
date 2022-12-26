import { nanoid } from "nanoid";
import { createContext } from "react";

export interface INavbarProps {
  isOpen: boolean;
  onClose: () => void;
  id: string;
}

/**
 * Context of Navbar for opening and closing the Navigation bar and storing ID.
 * @memberof Organisms
 * @exports NavbarContext
 */
export const NavbarContext = createContext<INavbarProps>({
  isOpen: false,
  onClose: () => undefined,
  id: nanoid(),
});
