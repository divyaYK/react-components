import { Meta } from "@storybook/react";
import {
  Header,
  ITextProps,
  Text,
} from "../components/atoms/typography/Typography";
import { COLORS } from "../shared/theme";

export default {
  title: "Typography",
  decorators: [(story) => <div className="">{story()}</div>],
} as Meta;

export const AllHeaders = () => (
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
AllHeaders.displayName = "All Headers";

export const NormalText = (props: ITextProps) => (
  <Text {...props}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
  </Text>
);

NormalText.args = {
  color: COLORS.LIGHT_TEXT,
  fontSize: 16,
  fontWeight: 500,
};

export const Subtitle = () => (
  <Text color={COLORS.PRIMARY_ORANGE}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
  </Text>
);
