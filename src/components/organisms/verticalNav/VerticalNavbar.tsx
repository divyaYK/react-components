import {
  FC,
  ReactNode,
  useCallback,
  useMemo,
  useState,
} from "react";
import { nanoid } from "nanoid";
import { NavbarContext } from "./NavbarContext";
import { NavbarButton } from "./NavbarButton";
import { NavbarList } from "./NavbarList";
import { NavbarListItem } from "./NavbarListItem";
import { NavbarBrand } from "./NavBrand";
import { NavbarFooter } from "./NavbarFooter";
import { NavbarLink } from "./NavbarLink";
import { NavbarContent } from "./NavbarContent";
import { NavbarWrapper } from "./NavbarWrapper";

interface INavbarComponentProps {
  children: ReactNode | ReactNode[];
}

interface INavbarCompositionProps {
  Button: typeof NavbarButton;
  List: typeof NavbarList;
  Item: typeof NavbarListItem;
  Brand: typeof NavbarBrand;
  Link: typeof NavbarLink;
  Content: typeof NavbarContent;
  Footer: typeof NavbarFooter;
  Wrapper: typeof NavbarWrapper;
}
export const Navbar: FC<INavbarComponentProps> & INavbarCompositionProps = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(true);
  const onClose = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);
  const id = nanoid();
  const context = useMemo(
    () => ({
      isOpen,
      onClose,
      id,
    }),
    [isOpen, onClose, id],
  );
  return (
    <NavbarContext.Provider value={context}>{children}</NavbarContext.Provider>
  );
};

Navbar.Wrapper = NavbarWrapper;
Navbar.Button = NavbarButton;
Navbar.List = NavbarList;
Navbar.Item = NavbarListItem;
Navbar.Brand = NavbarBrand;
Navbar.Link = NavbarLink;
Navbar.Content = NavbarContent;
Navbar.Footer = NavbarFooter;
