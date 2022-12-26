import styled from "styled-components";
import { COLORS, typography } from "../../../shared/theme";

/**
 * @name StyledCardCoverImage
 * @description Styled Card Cover Image for user's cover image.
 */
export const StyledCardCoverImage = styled.img``;

/**
 * @name StyledCardProfileImage
 * @description Styled Card Profile Image for user's profile image.
 */
export const StyledCardProfileImage = styled.img``;

/**
 * @name StyledCardBody
 * @description Styled Card Body wraps all card body contents
 */
export const StyledCardBody = styled.div``;

/**
 * @name StyledCardTitle
 * @description Styled Card Title for user's name or card title
 */
export const StyledCardTitle = styled.div``;

/**
 * @name StyledCardSubtitle
 * @description Styled Card Subtitle for user's pod or card's subtitle
 */
export const StyledCardSubtitle = styled.div``;

/**
 * @name StyledCardMetadata
 * @description Styled Card Meta data for adding more card data apart from description
 */
export const StyledCardMetadata = styled.div``;

/**
 * @name StyledCardDescription
 * @description Styled Card Description for card's description
 */
export const StyledCardDescription = styled.p``;

/**
 * @name StyledCardFooter
 * @description Styled Card Footer wraps all footer contents
 */
export const StyledCardFooter = styled.div``;

/**
 * @name StyledCardHeader
 * @description Styled Card Header wraps all header content
 */
export const StyledCardHeader = styled.div``;

/**
 * @name StyledCardWrapper
 * @description Styled Card Wrapper wraps all card contents
 * - contains all styles and child elements
 * - child element styles won't reflect without this wrapper.
 */
export const StyledCardWrapper = styled.div`
  overflow: hidden;
  margin: 1rem;
  background-color: ${COLORS.WHITE};
  border-radius: 8px;
  width: 350px;
  height: 500px;
  box-shadow: 0 2px 20px ${COLORS.DARK_GRAY};
  box-sizing: border-box;
  font-family: ${typography.type};
  cursor: pointer;

  & ${StyledCardHeader} {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;

    & ${StyledCardCoverImage} {
      width: 100%;
      height: 150px;
      object-fit: cover;
    }
    & ${StyledCardProfileImage} {
      position: absolute;
      height: 100px;
      width: 100px;
      border: 2px solid ${COLORS.WHITE};
      object-fit: cover;
      border-radius: 50%;
      bottom: -25%;
    }
  }

  & ${StyledCardBody} {
    margin-top: 2rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    & ${StyledCardTitle} {
      color: ${COLORS.DARK_TEXT};
      font-weight: 600;
      font-size: 1.5rem;
      text-transform: capitalize;
      margin: 0;
    }
    & ${StyledCardSubtitle} {
      color: ${COLORS.PRIMARY_ORANGE};
      font-weight: 600;
      margin: 0.7rem 0;
      text-transform: capitalize;
    }

    & ${StyledCardMetadata} {
      color: ${COLORS.LIGHT_TEXT};
      text-align: left;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    }

    & ${StyledCardDescription} {
      color: ${COLORS.LIGHT_TEXT};
      font-size: 0.9rem;
      text-align: left;
      width: 100%;
      height: 100px;
      word-break: keep-all;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 6;
      text-overflow: ellipsis;
      overflow: hidden;
      margin: 1rem 0 0;
    }
  }

  & ${StyledCardFooter} {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    padding: 1rem;
    overflow: hidden;
    height: 30px;
  }
`;
