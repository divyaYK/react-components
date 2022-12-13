import React from "react";
import { StyledButton } from "./ButtonStyles";

export interface IButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  children: string | JSX.Element;
  variant?: "primary" | "default";
}

export const Button = React.forwardRef<HTMLButtonElement, IButtonProps>(
  ({ children, ...props }) => (
    <StyledButton type="button" {...props}>
      {children}
    </StyledButton>
  ),
);

Button.displayName = "Button";

Button.defaultProps = {
  variant: "primary",
};
