import { Meta } from "@storybook/react";
import { Header, Text } from "../components/atoms/typography/Typography";
import { COLORS } from "../shared/theme";

export default {
  title: "Typography",
  component: Header,
} as Meta;

export const All = () => (
  <>
    <Header variant="h1">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </Header>
    <Header variant="h2">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </Header>
    <Header variant="h3">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </Header>
    <Header variant="h4">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </Header>
    <Header variant="h5">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </Header>
    <Header variant="h6">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </Header>
  </>
);

export const NormalText = () => (
  <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
);

export const Subtitle = () => (
  <Text color={COLORS.PRIMARY_ORANGE}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
  </Text>
);
