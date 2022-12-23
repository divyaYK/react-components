import {
  ComponentPropsWithoutRef, FC, forwardRef, ReactNode,
} from "react";
import { StyledCheckbox } from "./CheckboxStyles";

export interface ICheckboxProps {
  id: string;
  label: ReactNode | ReactNode[];
}

const CheckboxLabel = forwardRef<
  HTMLLabelElement,
  ComponentPropsWithoutRef<"label">
>((props) => (
  <StyledCheckbox.Label {...props}>
    <StyledCheckbox.Span />
    {props.children}
  </StyledCheckbox.Label>
));

const CheckboxInput = forwardRef<
  HTMLInputElement,
  ComponentPropsWithoutRef<"input">
>((props) => <StyledCheckbox.Input {...props} />);

export const Checkbox: FC<
  ICheckboxProps & Omit<ComponentPropsWithoutRef<"input">, "type">
> = ({ id, label, ...props }) => (
  <StyledCheckbox.Wrapper>
    <CheckboxInput {...props} id={id} type="checkbox" />
    <CheckboxLabel htmlFor={id}>{label}</CheckboxLabel>
  </StyledCheckbox.Wrapper>
);
