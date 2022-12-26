import { nanoid } from "nanoid";
import {
  StyledShowRatingGroup,
  StyledShowRatingSpan,
  StyledVisualRating,
} from "./RatingStyles";
import { Icon } from "../../atoms/icons/Icon";
import { COLORS } from "../../../shared/theme";

interface IRating {
  rating: number;
}

/**
 * General Rating Component with star and a number
 * @memberof Molecules
 * @exports Rating
 */
export const Rating = ({ rating }: IRating) => (
  <StyledShowRatingGroup>
    <Icon width={20} height={20} color={COLORS.RATING} icon="StarFilled" />
    <StyledShowRatingSpan>{rating}</StyledShowRatingSpan>
  </StyledShowRatingGroup>
);

/**
 * General Rating Component with multiple stars
 * @memberof Molecules
 * @exports VisualRating
 */
export const VisualRating = ({ rating }: IRating) => {
  const ratingIcons = new Array(rating).fill(0);
  const noRatingIcons = new Array(5 - rating).fill(0);
  return (
    <StyledVisualRating>
      {ratingIcons.map(() => (
        <Icon color={COLORS.RATING} key={nanoid()} icon="StarFilled" />
      ))}
      {noRatingIcons.map(() => (
        <Icon color={COLORS.DARK_GRAY} key={nanoid()} icon="StarFilled" />
      ))}
    </StyledVisualRating>
  );
};
