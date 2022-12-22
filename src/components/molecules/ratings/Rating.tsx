import { StyledShowRatingGroup, StyledShowRatingSpan } from "./RatingStyles";
import { Icon } from "../../atoms/icons/Icon";

interface IRating {
  rating: number;
}
export const Rating = ({ rating }: IRating) => (
  <StyledShowRatingGroup>
    <Icon width={20} height={20} icon="StarFilled" />
    <StyledShowRatingSpan>{rating}</StyledShowRatingSpan>
  </StyledShowRatingGroup>
);
