import styled from "styled-components";
import { COLORS, typography } from "../../../shared/theme";

/**
 * @name StyledNavBrand
 * @description Styled Navbar Brand for logo display
 */
export const StyledNavBrand = styled.div``;

/**
 * @name StyledNavContent
 * @description Styled Navbar Content component for wrapping the content of the navigation bar
 */
export const StyledNavContent = styled.div``;

/**
 * @name StyledNavList
 * @description Styled Navbar List component
 */
export const StyledNavList = styled.ul``;

/**
 * @name StyledNavListItem
 * @description Styled Navbar List Item component
 */
export const StyledNavListItem = styled.li``;

/**
 * @name StyledNavFooter
 * @description Styled Navbar Footer component for wrapping the footer content of the navigation bar
 */
export const StyledNavFooter = styled.div``;

/**
 * @name StyledNavLink
 * @description Styled Navbar Link Component
 */
export const StyledNavLink = styled.a`
  text-decoration: none;
  color: ${COLORS.WHITE};
`;

export interface IStyledNavCollapseButton {
  bgColor: string;
  color: string;
  isRounded: boolean;
}
/**
 * @name StyledNavCollapseButton
 * @description Styled Navbar Collapse Button component for collapsing the navigation bar.
 */
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
/**
 * @name StyledNavbarWrapper
 * @description Styled Navbar Wrapper that wraps all Navbar Content.
 */
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
