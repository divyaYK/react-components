import { Meta } from "@storybook/react";
import { Card } from "../components/organisms/cards/Card";
import { Badge } from "../components/atoms/badges/Badge";

export default {
  title: "Cards",
  component: Card,
} as Meta;

export const SimpleCard = ({ badges }: { badges: string[] }) => (
  <Card>
    <Card.Header>
      <Card.CoverImage />
      <Card.ProfileImage />
    </Card.Header>
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Subtitle>Card Subtitle</Card.Subtitle>
      <Card.Metadata>Card Metadata</Card.Metadata>
      <Card.Description>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi atque
        tenetur blanditiis maxime placeat numquam laborum voluptates nemo ipsum
        ullam quibusdam inventore repudiandae dolores quod magnam, officia
        temporibus explicabo exercitationem.
      </Card.Description>
    </Card.Body>
    <Card.Footer>
      {badges.map((badge) => (
        <Badge>{badge}</Badge>
      ))}
    </Card.Footer>
  </Card>
);

SimpleCard.args = {
  badges: ["ios", "swift", "android", "mobile", "react native"],
};
