import styled, { css } from "styled-components";
import { IButtonProps } from "./Button";
import { COLORS, typography } from "../../../shared/theme";

/**
 * @function
 * @name buttonColor
 * @description Returns the color and background color of the button wrapped
 * with styled's CSS function
 * @param variant - Variant decides the respective color styles of the button
 */
const buttonColor = (p: IButtonProps) => {
  let color = COLORS.WHITE;
  let backgroundColor = COLORS.PRIMARY_ORANGE;
  let padding = "0.5rem 2rem";
  let textDecoration = "none";
  let boxShadow = `0px 2px 5px ${backgroundColor}`;
  let transform = "translateY(-4px)";

  if (p.variant === "primaryOutline") {
    color = COLORS.PRIMARY_ORANGE;
    backgroundColor = "transparent";
    padding = "0";
    textDecoration = "underline";
    boxShadow = "none";
    transform = "translateY(0)";
  } else if (p.variant === "secondary") {
    color = COLORS.WHITE;
    backgroundColor = COLORS.SECONDARY_BLACK;
  } else if (p.variant === "secondaryOutline") {
    color = COLORS.SECONDARY_BLACK;
    backgroundColor = "transparent";
    padding = "0";
    textDecoration = "underline";
    boxShadow = "none";
    transform = "translateY(0)";
  }
  return css`
    color: ${color};
    background-color: ${backgroundColor};
    padding: ${padding};

    &:hover {
      text-decoration: ${textDecoration};
      box-shadow: ${boxShadow};
      transform: ${transform};
    }
  `;
};

/**
 * @name StyledButton
 * @description Styled Button component for all variants
 */
export const StyledButton = styled.button<IButtonProps>`
  cursor: pointer;
  font-weight: 600;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 50px;
  transition: all 0.15s ease-in-out;
  font-family: ${typography.type};
  outline: 0;
  border: 0;
  box-sizing: border-box;

  ${buttonColor}
`;
