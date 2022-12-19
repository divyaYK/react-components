import styled, { css } from "styled-components";
import { COLORS, typography } from "../../../shared/theme";

export const HeaderStyles = {
  h1: css({
    fontSize: typography.sizes.h1,
    fontWeight: typography.weight.bold,
    fontFamily: typography.type,
    color: COLORS.DARK_TEXT,
  }),
  h2: css({
    fontSize: typography.sizes.h2,
    fontWeight: typography.weight.bold,
    fontFamily: typography.type,
    color: COLORS.DARK_TEXT,
  }),
  h3: css({
    fontSize: typography.sizes.h3,
    fontWeight: typography.weight.bold,
    fontFamily: typography.type,
    color: COLORS.DARK_TEXT,
  }),
  h4: css({
    fontSize: typography.sizes.h4,
    fontWeight: typography.weight.bold,
    fontFamily: typography.type,
    color: COLORS.DARK_TEXT,
  }),
  h5: css({
    fontSize: typography.sizes.h5,
    fontWeight: typography.weight.bold,
    fontFamily: typography.type,
    color: COLORS.DARK_TEXT,
  }),
  h6: css({
    fontSize: typography.sizes.h6,
    fontWeight: typography.weight.bold,
    fontFamily: typography.type,
    color: COLORS.DARK_TEXT,
  }),
};

export interface IHeaderProps {
  variant: keyof typeof HeaderStyles;
}

export const StyledHeaders = styled.p<IHeaderProps>`
  margin-bottom: 1rem;
  ${(props) => HeaderStyles[props.variant]}
`;

export interface ITextProps {
  fontSize?: number | string;
  fontWeight?: number | string;
  color?: string;
}
export const StyledText = styled.p<ITextProps>`
  font-size: ${(props) => (props.fontSize ? props.fontSize : "1rem")};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "400")};
  font-family: ${typography.type};
  color: ${(props) => (props.color ? props.color : COLORS.LIGHT_TEXT)};
`;
