import React from "react";
import { StyledButton } from "./ButtonStyles";

export interface IButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  children: string | JSX.Element;
  variant?: "primary" | "primaryOutline" | "secondary" | "secondaryOutline";
}

/**
 * Button component with four variants.
 * @memberof Atoms
 * @exports Button
 */
export const Button = React.forwardRef<HTMLButtonElement, IButtonProps>(
  ({ children, ...props }, ref) => (
    <StyledButton ref={ref} type="button" {...props}>
      {children}
    </StyledButton>
  ),
);

Button.displayName = "Button";

Button.defaultProps = {
  variant: "primary",
};
