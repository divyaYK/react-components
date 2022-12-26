import styled from "styled-components";
import { rgba } from "polished";
import { COLORS } from "../../../shared/theme";

/**
 * @name StyledInput
 * @description Styled input of text or number type.
 */
export const StyledInput = styled.input.attrs((props) => ({
  type: props.type,
}))`
  &::placeholder {
    color: ${COLORS.LIGHT_TEXT};
  }

  appearance: none;
  border: 2px solid transparent;
  display: block;
  box-sizing: border-box;
  outline: none;
  font-size: 1rem;
  background-color: ${COLORS.WHITE};
  padding: 0.5rem;
  transition: all 0.3s ease-in;
  position: relative;

  &:focus {
    border-color: ${rgba(COLORS.SECONDARY_BLACK, 0.2)};
  }
`;
