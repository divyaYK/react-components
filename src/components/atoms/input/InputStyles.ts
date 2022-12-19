import styled from "styled-components";
import { COLORS } from "../../../shared/theme";

export const StyledInput = styled.input`
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
    border-color: ${COLORS.DARK_GRAY};
  }
`;
