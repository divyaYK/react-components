import { ComponentPropsWithoutRef, forwardRef } from "react";
import { StyledInput } from "./InputStyles";

interface IInput extends ComponentPropsWithoutRef<"input"> {
  type: "text" | "number";
}

/**
 * Input component.
 * @memberof Atoms
 * @exports Input
 */
export const Input = forwardRef<HTMLInputElement, IInput>(
  ({ type, ...props }, ref) => <StyledInput type={type} ref={ref} {...props} />,
);
