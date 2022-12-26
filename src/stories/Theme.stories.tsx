import { Meta } from "@storybook/react";
import styled from "styled-components";
import { COLORS, ICONS, typography } from "../shared/theme";
import { Icon } from "../components/atoms";

export default {
  title: "Theme",
  decorators: [(story) => <div className="">{story()}</div>],
} as Meta;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-evenly;
  padding: 0;
  margin: 0;
  font-family: ${typography.type};
`;
const ComponentWrapper = styled.div`
  box-sizing: border-box;
  margin: 0.5rem;
  padding: 0;
  background-color: ${COLORS.WHITE};
  color: ${COLORS.SECONDARY_BLACK};
  border: 1px solid ${COLORS.SECONDARY_BLACK};
  width: 100px;
  min-height: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;

  & p {
    box-sizing: border-box;
    margin: 0.5rem 0 0;
    padding: 0;
    text-align: center;
  }
`;

interface IColorDiv {
  bg: string;
}
const ColorDiv = styled.div<IColorDiv>`
  flex-grow: 1;
  box-sizing: border-box;
  background-color: ${(props) => props.bg};
  padding: 0.5rem;
  margin: 0;
  width: 100%;
  color: ${COLORS.SECONDARY_BLACK};
`;

export const AllColors = () => (
  <MainWrapper>
    {Object.keys(COLORS).map((color) => (
      <ComponentWrapper>
        <ColorDiv bg={COLORS[color]} />
        <p>{COLORS[color]}</p>
      </ComponentWrapper>
    ))}
  </MainWrapper>
);

const IconWrapper = styled.div`
  margin: 0.5rem 0;
  flex-grow: 1;
  width: 40%;
`;

export const AllIcons = () => (
  <MainWrapper>
    {Object.keys(ICONS).map((icon) => (
      <ComponentWrapper>
        <IconWrapper>
          <Icon icon={icon} width="100%" height="100%" />
        </IconWrapper>
        <p>{icon}</p>
      </ComponentWrapper>
    ))}
  </MainWrapper>
);
