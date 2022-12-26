import styled from "styled-components";
import { COLORS, typography } from "../../../shared/theme";

/**
 * @name StyledShowRatingGroup
 * @description Styled Show Rating Group for icon and the number
 */
export const StyledShowRatingGroup = styled.div`
  display: inline-flex;
  color: ${COLORS.RATING};
  font-size: 1.2rem;
  box-sizing: border-box;
  font-family: ${typography.type};
  align-items: start;
  justify-content: start;
`;

/**
 * @name StyledShowRatingSpan
 * @description Styled Show Rating Number
 */
export const StyledShowRatingSpan = styled.span`
  margin-left: 0.5rem;
`;

/**
 * @name StyledVisualRating
 * @description Styled only start icons
 */
export const StyledVisualRating = styled.div`
  display: inline-flex;
  font-size: 1.2rem;
  box-sizing: border-box;
  font-family: ${typography.type};
  align-items: center;
  justify-content: start;
`;
