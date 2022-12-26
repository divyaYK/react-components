import { Meta } from "@storybook/react";
import {
  Checkbox,
  ICheckboxProps,
} from "../components/atoms/checkboxes/Checkbox";

export default {
  title: "Checkbox",
  component: Checkbox,
} as Meta;

export const Basic = (args: ICheckboxProps) => <Checkbox {...args} />;
Basic.args = {
  label: "Click Me!",
  id: "random",
};
