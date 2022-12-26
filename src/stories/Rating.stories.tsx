import { Meta } from "@storybook/react";
import { Rating, VisualRating } from "../components/molecules/ratings/Rating";

export default {
  title: "Rating",
  decorators: [(story) => <div className="">{story()}</div>],
} as Meta;

export const DisplayRating = ({ rating }: { rating: number }) => (
  <Rating rating={rating} />
);

DisplayRating.args = {
  rating: 4.5,
};

export const DisplayVisualRating = ({ rating }: { rating: number }) => (
  <VisualRating rating={rating} />
);

DisplayVisualRating.args = {
  rating: 4,
};
