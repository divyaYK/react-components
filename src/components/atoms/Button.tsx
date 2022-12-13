import React from "react";

export interface IButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  children: string | JSX.Element;
}

export const Button = React.forwardRef<HTMLButtonElement, IButtonProps>(
  ({ children, ...props }) => (
    <button type="button" {...props}>
      {children}
    </button>
  ),
);
