import { ComponentPropsWithoutRef } from "react";
import { Meta } from "@storybook/react";
import { Badge } from "../components/atoms/badges/Badge";

export default {
  title: "Badge",
  component: Badge,
} as Meta;

export const Template = (args: ComponentPropsWithoutRef<"span">) => (
  <Badge {...args}>Label</Badge>
);

Template.storyName = "Badge";
