import { nanoid } from "nanoid";
import { Meta } from "@storybook/react";
import { TabGroup } from "../components/molecules/tabs/TabGroup";
import { Tab } from "../components/molecules/tabs/Tab";

export default {
  title: "Tabs",
  decorators: [(story) => <div className="">{story()}</div>],
} as Meta;

export const Basic = ({ children }: { children: string[] }) => (
  <TabGroup>
    {children.map((child, index) => (
      <Tab isActive={index === 1} key={nanoid()}>
        {child}
      </Tab>
    ))}
  </TabGroup>
);

Basic.args = {
  children: ["hi", "hello", "hey", "halo"],
};
