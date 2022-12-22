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

interface ICardImgProps extends ComponentPropsWithoutRef<"img"> {
  src?: string;
  alt?: string;
}

const CardHeader = forwardRef<HTMLDivElement, ICardProps>(
  ({ children, ...props }) => (
    <StyledCardHeader {...props}>{children}</StyledCardHeader>
  ),
);

const CardCoverImage = forwardRef<HTMLImageElement, ICardImgProps>((props) => (
  <StyledCardCoverImage {...props} />
));

CardCoverImage.defaultProps = {
  src: "/assets/cover_img.jpg",
  alt: "default cover image",
};

const CardProfileImage = forwardRef<HTMLImageElement, ICardImgProps>(
  (props) => <StyledCardProfileImage {...props} />,
);

CardProfileImage.defaultProps = {
  src: "/assets/user-default.png",
  alt: "default profile picture",
};

const CardBody = forwardRef<HTMLDivElement, ICardProps>(
  ({ children, ...props }) => (
    <StyledCardBody {...props}>{children}</StyledCardBody>
  ),
);
const CardFooter = forwardRef<HTMLDivElement, ICardProps>(
  ({ children, ...props }) => (
    <StyledCardFooter {...props}>{children}</StyledCardFooter>
  ),
);

const CardMetadata = forwardRef<HTMLDivElement, ICardProps>(
  ({ children, ...props }) => (
    <StyledCardMetadata {...props}>{children}</StyledCardMetadata>
  ),
);

const CardTitle = forwardRef<HTMLDivElement, ICardProps>(
  ({ children, ...props }) => (
    <StyledCardTitle {...props}>{children}</StyledCardTitle>
  ),
);

const CardSubtitle = forwardRef<HTMLDivElement, ICardProps>(
  ({ children, ...props }) => (
    <StyledCardSubtitle {...props}>{children}</StyledCardSubtitle>
  ),
);

const CardDescription = forwardRef<HTMLDivElement, ICardText>(
  ({ children, ...props }) => (
    <StyledCardDescription {...props}>{children}</StyledCardDescription>
  ),
);

interface ICardCompositionProps {
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

const Card: FC<ICardProps> & ICardCompositionProps = ({
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

export default Card;
