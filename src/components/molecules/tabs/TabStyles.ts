import styled from "styled-components";
import { rgba } from "polished";
import { COLORS, typography } from "../../../shared/theme";

/**
 * @name StyledTab
 * @description Styled Tab to switch views
 */
export const StyledTab = styled.div`
  box-sizing: border-box;
  padding: 0.5rem 1rem;
  font-family: ${typography.type};
  font-size: 1.2rem;
  color: ${COLORS.LIGHT_TEXT};
  border-bottom: 3px solid transparent;
  cursor: pointer;
  text-transform: capitalize;

  &:hover {
    background-color: ${rgba(COLORS.PRIMARY_ORANGE, 0.5)};
    color: ${COLORS.WHITE};
  }

  &.active {
    border-bottom-color: ${COLORS.PRIMARY_ORANGE};
    color: ${COLORS.PRIMARY_ORANGE};
  }
`;

/**
 * @name StyledTabGroup
 * @description Styled Tab Group that wraps all tabs
 */
export const StyledTabGroup = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
`;
