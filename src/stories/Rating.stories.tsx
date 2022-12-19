import { Meta } from "@storybook/react";
import { Rating } from "../components/molecules/ratings/Rating";

export default {
  title: "Rating",
  component: Rating,
} as Meta;

export const DisplayRating = ({ rating }: { rating: number }) => (
  <Rating rating={rating} />
);

DisplayRating.args = {
  rating: 4.5,
};
