import { Story, Meta } from "@storybook/react";
import { Button, IButtonProps } from "../components/atoms/buttons/Button";

export default {
  title: "Button",
  component: Button,
} as Meta;

export const Basic: Story<IButtonProps> = (args) => (
  <Button {...args}>Click Me!</Button>
);
