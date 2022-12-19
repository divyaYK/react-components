import { ComponentPropsWithoutRef } from "react";
import { Meta } from "@storybook/react";
import { Input } from "../components/atoms/input/Input";

export default {
  title: "Input",
  component: Input,
} as Meta;

export const Template = (args: ComponentPropsWithoutRef<"input">) => (
  <Input {...args} />
);
Template.args = {
  id: "basic",
  placeholder: "Enter value",
};

Template.storyName = "Basic Input";
