import { ReactNode } from "react";
import { nanoid } from "nanoid";
import { Meta } from "@storybook/react";
import { Navbar } from "../components/organisms/verticalNav/VerticalNavbar";
import { COLORS } from "../shared/theme";
import { Icon } from "../components/atoms/icons/Icon";

export default {
  title: "Navbar",
  decorators: [(story) => <div className="">{story()}</div>],
} as Meta;

export const Basic = ({ children }: { children: ReactNode[] }) => (
  <Navbar>
    <Navbar.Button
      isRounded={false}
      bgColor={COLORS.SECONDARY_BLACK}
      color={COLORS.WHITE}
    >
      <Icon icon="Hamburger" width={24} height={24} />
    </Navbar.Button>
    <Navbar.Wrapper style={{ height: "500px" }}>
      <Navbar.Brand>
        <Navbar.Link>LOGO</Navbar.Link>
      </Navbar.Brand>
      <Navbar.Content>
        <Navbar.List>
          {children.map((child) => (
            <Navbar.Item key={nanoid()}>{child}</Navbar.Item>
          ))}
        </Navbar.List>
      </Navbar.Content>
      <Navbar.Footer>
        <Navbar.Link>Action 1</Navbar.Link>
        <Navbar.Link>Action 2</Navbar.Link>
      </Navbar.Footer>
    </Navbar.Wrapper>
  </Navbar>
);

Basic.args = {
  label: "Click Me",
  children: ["hi", "hello", "hey", "halo"],
};
