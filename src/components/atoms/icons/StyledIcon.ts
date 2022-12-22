import styled, { css } from "styled-components";

interface IStyledIconProps {
  width?: number | string;
  height?: number | string;
}

const iconCss = ({ width, height }: IStyledIconProps) => css`
  width: ${typeof width === "number" ? `${width}px` : width};
  height: ${typeof height === "number" ? `${height}px` : height};
`;

export const StyledIcon = styled.div<IStyledIconProps>`
  display: flex;

  & svg {
    display: inline-block;
    shape-rendering: inherit;
    vertical-align: middle;
    ${(props) => iconCss(props)}

    path: {
      fill: currentColor;
    }
  }
`;
