import styled from "styled-components";
import { COLORS, typography } from "../../../shared/theme";

export const StyledNavBrand = styled.div``;
export const StyledNavContent = styled.div``;
export const StyledNavList = styled.ul``;
export const StyledNavListItem = styled.li``;
export const StyledNavFooter = styled.div``;
export const StyledNavLink = styled.a`
  text-decoration: none;
  color: ${COLORS.WHITE};
`;

export interface IStyledNavCollapseButton {
  bgColor: string;
  color: string;
  isRounded: boolean;
}
export const StyledNavCollapseButton = styled.button<IStyledNavCollapseButton>`
  box-sizing: border-box;
  cursor: pointer;
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  ${(props) => (props.isRounded ? "border-radius: 50%;" : "")}
`;

export interface IDisplayProps {
  isOpen: boolean;
}
export const StyledNavbarWrapper = styled.nav<IDisplayProps>`
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  flex-direction: column;
  height: 100%;
  width: 200px;
  background-color: ${COLORS.SECONDARY_BLACK};
  color: ${COLORS.WHITE};
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-size: 1rem;
  font-family: ${typography.type};
  font-weight: 600;

  & ${StyledNavBrand} {
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  & ${StyledNavContent} {
    flex-grow: 1;

    & ${StyledNavList} {
      list-style: none;
      margin: 0;
      padding: 0;

      & ${StyledNavListItem} {
        padding: 0.5rem 1rem;
        cursor: pointer;
        transition: all 0.3s ease-in-out;

        &.active {
          background-color: ${COLORS.ACTIVE_DARK};
        }

        &:hover {
          background-color: ${COLORS.NAV_HOVER};
        }
      }
    }
  }

  & ${StyledNavFooter} {
    display: flex;
    flex-direction: column;

    & ${StyledNavLink} {
      padding: 0.5rem 1rem;
      background-color: transparent;
      transition: all 0.3s ease-in-out;

      &:hover {
        background-color: ${COLORS.NAV_HOVER};
      }

      &.active {
        background-color: ${COLORS.ACTIVE_DARK};
      }
    }
  }
`;
