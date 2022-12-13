import styled, { css } from "styled-components";
import { IButtonProps } from "./Button";
import { PRIMARY_ORANGE, WHITE } from "../../../utils/constants";

const buttonColor = (p: IButtonProps) => {
  let color = PRIMARY_ORANGE;
  let backgroundColor = "transparent";

  if (p.variant === "primary") {
    color = WHITE;
    backgroundColor = PRIMARY_ORANGE;
  }

  return css`
    color: ${color};
    background-color: ${backgroundColor};

    &:focus-visible {
      border-color: ${color};
    }
  `;
};

export const StyledButton = styled.button<IButtonProps>`
  cursor: pointer;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.5rem 2rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 100px;
  transition: all 0.15s ease-in-out;

  ${buttonColor}

  &:focus {
    outline: 0;
  }
`;
