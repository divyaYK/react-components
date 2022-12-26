import {
  ComponentPropsWithoutRef, FC, ReactNode, forwardRef,
} from "react";
import {
  StyledCardBody,
  StyledCardCoverImage,
  StyledCardDescription,
  StyledCardFooter,
  StyledCardHeader,
  StyledCardMetadata,
  StyledCardProfileImage,
  StyledCardSubtitle,
  StyledCardTitle,
  StyledCardWrapper,
} from "./CardStyles";

interface ICardProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode | ReactNode[];
}

interface ICardText extends ComponentPropsWithoutRef<"p"> {
  children: ReactNode | ReactNode[] | string;
}

export interface ICardImgProps extends ComponentPropsWithoutRef<"img"> {
  src?: string;
  alt?: string;
}

/**
 * Card Header Component wraps cover image and profile image.
 * @memberof Card
 * @exports CardHeader
 */
const CardHeader = forwardRef<HTMLDivElement, ICardProps>(
  ({ children, ...props }, ref) => (
    <StyledCardHeader ref={ref} {...props}>
      {children}
    </StyledCardHeader>
  ),
);

/**
 * Card Cover Image
 * @memberof Card
 * @exports CardCoverImage
 */
const CardCoverImage = forwardRef<HTMLImageElement, ICardImgProps>(
  (props, ref) => <StyledCardCoverImage ref={ref} {...props} />,
);

CardCoverImage.defaultProps = {
  src: "/assets/cover_img.jpg",
  alt: "default cover image",
};

/**
 * Card Profile Image
 * @memberof Card
 * @exports CardProfileImage
 */
const CardProfileImage = forwardRef<HTMLImageElement, ICardImgProps>(
  (props, ref) => <StyledCardProfileImage ref={ref} {...props} />,
);

CardProfileImage.defaultProps = {
  src: "/assets/user-default.jpg",
  alt: "default profile picture",
};

/**
 * Card Body wraps all body content
 * @memberof Card
 * @exports CardBody
 */
const CardBody = forwardRef<HTMLDivElement, ICardProps>(
  ({ children, ...props }, ref) => (
    <StyledCardBody ref={ref} {...props}>
      {children}
    </StyledCardBody>
  ),
);

/**
 * Card Footer wraps all footer content
 * @memberof Card
 * @exports CardFooter
 */
const CardFooter = forwardRef<HTMLDivElement, ICardProps>(
  ({ children, ...props }, ref) => (
    <StyledCardFooter ref={ref} {...props}>
      {children}
    </StyledCardFooter>
  ),
);

/**
 * Card Metadata wraps all Metadata content
 * @memberof Card
 * @exports CardMetadata
 */
const CardMetadata = forwardRef<HTMLDivElement, ICardProps>(
  ({ children, ...props }, ref) => (
    <StyledCardMetadata ref={ref} {...props}>
      {children}
    </StyledCardMetadata>
  ),
);

/**
 * Card Title
 * @memberof Card
 * @exports CardTitle
 */
const CardTitle = forwardRef<HTMLDivElement, ICardProps>(
  ({ children, ...props }, ref) => (
    <StyledCardTitle ref={ref} {...props}>
      {children}
    </StyledCardTitle>
  ),
);

/**
 * Card Subtitle
 * @memberof Card
 * @exports CardSubtitle
 */
const CardSubtitle = forwardRef<HTMLDivElement, ICardProps>(
  ({ children, ...props }, ref) => (
    <StyledCardSubtitle ref={ref} {...props}>
      {children}
    </StyledCardSubtitle>
  ),
);

/**
 * Card Description
 * @memberof Card
 * @exports CardDescription
 */
const CardDescription = forwardRef<HTMLDivElement, ICardText>(
  ({ children, ...props }, ref) => (
    <StyledCardDescription ref={ref} {...props}>
      {children}
    </StyledCardDescription>
  ),
);

export interface ICardCompositionProps {
  Header: typeof CardHeader;
  Body: typeof CardBody;
  Footer: typeof CardFooter;
  Metadata: typeof CardMetadata;
  Title: typeof CardTitle;
  Subtitle: typeof CardSubtitle;
  Description: typeof CardDescription;
  CoverImage: typeof CardCoverImage;
  ProfileImage: typeof CardProfileImage;
}

/**
 * @module Card
 * Card Components for user cards.
 * @memberof Organisms
 * @exports Card, Header, Body, Footer,
 * Title, Subtitle, Description, Metadata,
 * CoverImage, ProfileImage
 */
export const Card: FC<ICardProps> & ICardCompositionProps = ({
  children,
  ...props
}) => <StyledCardWrapper {...props}>{children}</StyledCardWrapper>;

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;
Card.Metadata = CardMetadata;
Card.Title = CardTitle;
Card.Subtitle = CardSubtitle;
Card.Description = CardDescription;
Card.CoverImage = CardCoverImage;
Card.ProfileImage = CardProfileImage;
