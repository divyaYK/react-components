import {
  ComponentPropsWithoutRef, FC, forwardRef, ReactNode,
} from "react";
import { StyledCheckbox } from "./CheckboxStyles";

export interface ICheckboxProps {
  id: string;
  label: ReactNode | ReactNode[] | JSX.Element;
}

const CheckboxLabel = forwardRef<
  HTMLLabelElement,
  ComponentPropsWithoutRef<"label">
>((props, ref) => (
  <StyledCheckbox.Label ref={ref} {...props}>
    <StyledCheckbox.Span />
    {props.children}
  </StyledCheckbox.Label>
));

const CheckboxInput = forwardRef<
  HTMLInputElement,
  ComponentPropsWithoutRef<"input">
>((props, ref) => <StyledCheckbox.Input ref={ref} {...props} />);

/**
 * Checkbox component.
 * @memberof Atoms
 * @exports Checkbox
 */
export const Checkbox: FC<
  ICheckboxProps & Omit<ComponentPropsWithoutRef<"input">, "type">
> = ({ id, label, ...props }) => (
  <StyledCheckbox.Wrapper>
    <CheckboxInput {...props} id={id} type="checkbox" />
    <CheckboxLabel htmlFor={id}>{label}</CheckboxLabel>
  </StyledCheckbox.Wrapper>
);
