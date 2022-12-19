import { ReactNode, ComponentPropsWithoutRef, forwardRef } from "react";
import {
  IHeaderProps,
  ITextProps,
  StyledHeaders,
  StyledText,
} from "./TypeStyles";

interface IHeaderComponentProps
  extends IHeaderProps,
    ComponentPropsWithoutRef<"p"> {
  text?: string;
  children?: ReactNode | ReactNode[];
}

export const Header = ({
  variant,
  text,
  children,
  ...props
}: IHeaderComponentProps) => {
  if (children) {
    return (
      <StyledHeaders {...props} variant={variant}>
        {children}
      </StyledHeaders>
    );
  }
  return (
    <StyledHeaders {...props} variant={variant}>
      {text}
    </StyledHeaders>
  );
};

Header.defaultProps = {
  text: "",
  children: [],
};

interface ITextComponentProps extends ITextProps {
  text?: string;
  children?: ReactNode | ReactNode[];
}

export const Text = forwardRef<HTMLParagraphElement, ITextComponentProps>(
  ({ children, text, ...props }) => {
    if (children) {
      return <StyledText {...props}>{children}</StyledText>;
    }
    return <StyledText {...props}>{text}</StyledText>;
  },
);

Text.defaultProps = {
  text: "",
  children: undefined,
};
