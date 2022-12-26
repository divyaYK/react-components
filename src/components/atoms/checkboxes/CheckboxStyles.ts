import styled, { keyframes } from "styled-components";
import { COLORS, typography } from "../../../shared/theme";

const popAnimation = keyframes`
  0% {
    opacity: 0;
  }
  75% {
    opacity: 1;
  }
  100% {
    transform: scale(1.2);
  }
`;

/**
 * @name StyledLabel
 * @description Styled label component for Checkbox
 */
const StyledLabel = styled.label`
  cursor: pointer;
`;

/**
 * @name StyledLabelSpan
 * @description Styled Span component for Checkbox. Created for implementing check animation.
 */
const StyledLabelSpan = styled.span``;

/**
 * @name StyledCheckboxWrapper
 * @description Styled wrapping Div for Checkbox.
 */
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

/**
 * @name StyledCheckboxInput
 * @description Styled Input component for Checkbox.
 */
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

/**
 * @module StyledCheckbox
 * @name StyledCheckbox
 * @description Styled Checkbox children for Checkboxes
 * @exports StyledLabel, StyledCheckboxInput, StyledCheckboxWrapper, StyledLabelSpan
 */
export const StyledCheckbox = {
  Label: StyledLabel,
  Input: StyledCheckboxInput,
  Wrapper: StyledCheckboxWrapper,
  Span: StyledLabelSpan,
};
