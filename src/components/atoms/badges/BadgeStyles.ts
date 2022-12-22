import styled from "styled-components";
import { rgba } from "polished";
import { COLORS, typography } from "../../../shared/theme";

export const StyledBadge = styled.span`
  display: inline-block;
  white-space: nowrap;
  vertical-align: top;
  font-size: 1rem;
  box-sizing: border-box;
  font-family: ${typography.type};
  padding: 0.4rem 0.8rem;
  color: ${COLORS.BADGE_COLOR};
  margin: 0.5rem;
  background-color: ${rgba(COLORS.BADGE_COLOR, 0.2)};
`;
