import { ReactNode } from "react";
import { nanoid } from "nanoid";
import { Meta } from "@storybook/react";
import { Dropdown } from "../components/molecules/dropdown/Dropdown";

export default {
  title: "Dropdown",
  decorators: [(story) => <div className="">{story()}</div>],
} as Meta;

export const Basic = ({
  label,
  children,
}: {
  label: string;
  children: ReactNode[];
}) => (
  <Dropdown>
    <Dropdown.Button label={label} />
    <Dropdown.List>
      {children.map((child) => (
        <Dropdown.Item key={nanoid()}>{child}</Dropdown.Item>
      ))}
    </Dropdown.List>
  </Dropdown>
);

Basic.args = {
  label: "Click Me",
  children: ["hi", "hello", "hey", "halo"],
};
