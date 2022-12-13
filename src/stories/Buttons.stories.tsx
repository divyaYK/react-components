import { Story, Meta } from "@storybook/react";
import { Button, IButtonProps } from "../components/atoms/buttons/Button";

export default {
  title: "Components/Button",
  component: Button,
} as Meta;

const Template: Story<IButtonProps> = (args) => (
  <Button {...args}>Click Me!</Button>
);

export const Default = Template.bind({});
