import styled, { keyframes } from "styled-components";
import { COLORS, typography } from "../../../shared/theme";

const popAnimation = keyframes`
  @keyframes pop {
    0% {
      opacity: 0;
    }
    75% {
      opacity: 1;
    }
    100% {
      transform: scale(1.2);
    }
  }
`;

const StyledLabel = styled.label`
  cursor: pointer;
`;
const StyledLabelSpan = styled.span``;

const StyledCheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 400;
  font-family: ${typography.type};
  color: ${COLORS.LIGHT_TEXT};
  box-sizing: border-box;
`;

const StyledCheckboxInput = styled.input`
  display: none;

  & + ${StyledLabel} ${StyledLabelSpan} {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    margin-right: 10px;

    &:before,
    &:after {
      transition: all 0.3s ease-in-out;
      position: absolute;
      height: 1rem;
      width: 1rem;
      content: "";
      border-radius: 4px;
      border: 2px solid ${COLORS.DARK_GRAY};
      background: transparent;
      z-index: 1;
    }

    &:after {
      z-index: 0;
      border: none;
    }
  }

  &:checked + ${StyledLabel} ${StyledLabelSpan} {
    &:before {
      animation: ${popAnimation} 0.3s ease;
      z-index: 100;
      background: ${COLORS.PRIMARY_ORANGE};
      border-color: transparent;
    }
  }
`;

export const StyledCheckbox = {
  Label: StyledLabel,
  Input: StyledCheckboxInput,
  Wrapper: StyledCheckboxWrapper,
  Span: StyledLabelSpan,
};
