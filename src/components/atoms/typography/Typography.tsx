import { ReactNode, ComponentPropsWithoutRef, forwardRef } from "react";
import { HeaderStyles, StyledHeaders, StyledText } from "./TypeStyles";
import { COLORS } from "../../../shared/theme";

export interface IHeaderProps {
  variant: keyof typeof HeaderStyles;
}
export interface ITextProps {
  fontSize?: number | string;
  fontWeight?: number | string;
  color?: string;
}

interface IHeaderComponentProps
  extends IHeaderProps,
    ComponentPropsWithoutRef<"p"> {
  children: ReactNode | ReactNode[] | JSX.Element;
}

/**
 * Header component - refers to all header elements
 * @memberof Atoms
 * @exports Header
 */
export const Header = forwardRef<HTMLParagraphElement, IHeaderComponentProps>(
  ({ variant, children, ...props }, ref) => (
    <StyledHeaders as={variant} ref={ref} {...props} variant={variant}>
      {children}
    </StyledHeaders>
  ),
);

interface ITextComponentProps extends ITextProps {
  children: ReactNode | ReactNode[] | JSX.Element;
}

/**
 * Text component - refers to paragraph element
 * @memberof Atoms
 * @exports Text
 */
export const Text = forwardRef<HTMLParagraphElement, ITextComponentProps>(
  ({ children, ...props }, ref) => (
    <StyledText ref={ref} {...props}>
      {children}
    </StyledText>
  ),
);

Text.defaultProps = {
  fontSize: "1rem",
  fontWeight: 400,
  color: COLORS.LIGHT_TEXT,
};
