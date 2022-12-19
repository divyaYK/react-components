import { StyledAddRatingGroup } from "./RatingStyles";
import { Icon } from "../../atoms/icons/Icon";

interface IRating {
  rating: number;
}
export const Rating = ({ rating }: IRating) => (
  <StyledAddRatingGroup>
    <Icon icon="StarFilled" />
    <span>{rating}</span>
  </StyledAddRatingGroup>
);
