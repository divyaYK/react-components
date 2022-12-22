import styled from "styled-components";
import { COLORS, typography } from "../../../shared/theme";

export const StyledCardCoverImage = styled.img``;
export const StyledCardProfileImage = styled.img``;
export const StyledCardBody = styled.div``;
export const StyledCardTitle = styled.div``;
export const StyledCardSubtitle = styled.div``;
export const StyledCardMetadata = styled.div``;
export const StyledCardDescription = styled.p``;
export const StyledCardFooter = styled.div``;
export const StyledCardHeader = styled.div``;

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
    border: 1px solid transparent;

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
