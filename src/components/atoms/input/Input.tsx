import { ComponentPropsWithoutRef, forwardRef } from "react";
import { StyledInput } from "./InputStyles";

export const Input = forwardRef<
  HTMLInputElement,
  ComponentPropsWithoutRef<"input">
>((props) => <StyledInput {...props} />);
