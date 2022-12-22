import styled from "styled-components";
import { COLORS, typography } from "../../../shared/theme";

export const StyledShowRatingGroup = styled.div`
  display: inline-flex;
  color: ${COLORS.RATING};
  font-size: 1.2rem;
  box-sizing: border-box;
  font-family: ${typography.type};
  align-items: start;
  justify-content: start;
`;

// ICON COLOR IS RATING and DARK GRAY

export const StyledShowRatingSpan = styled.span`
  margin-left: 0.5rem;
`;
