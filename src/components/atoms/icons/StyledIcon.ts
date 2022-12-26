import styled, { css } from "styled-components";

interface IStyledIconProps {
  width?: number | string;
  height?: number | string;
  color?: string;
}

/**
 * @function
 * @name iconCss
 * @description Returns size styles of the icon
 * @param width - Width of the icon
 * @param height - Height of the icon
 */
const iconCss = ({ width, height }: IStyledIconProps) => css`
  width: ${typeof width === "number" ? `${width}px` : width};
  height: ${typeof height === "number" ? `${height}px` : height};
`;

/**
 * @name StyledIcon
 * @description Styled Icon component for all SVGs
 */
export const StyledIcon = styled.div<IStyledIconProps>`
  display: flex;
  color: ${(props) => (props.color ? props.color : "inherit")};

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
