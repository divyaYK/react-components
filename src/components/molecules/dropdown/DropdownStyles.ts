import styled from "styled-components";
import { COLORS } from "../../../shared/theme";

/**
 * @name StyledDropdownWrapper
 * @description Styled Dropdown wrapper that's native to the list
 */
export const StyledDropdownWrapper = styled.div`
  position: relative;
`;

/**
 * @name StyledDropdownButton
 * @description Styled Dropdown Menu button
 */
export const StyledDropdownButton = styled.button`
  display: inline-flex;
  padding: 0.5rem;
  box-sizing: border-box;
  appearance: none;
  align-items: center;
  outline: none;
  background-color: ${COLORS.WHITE};
  color: ${COLORS.LIGHT_TEXT};
  cursor: pointer;
  font-size: 1.3rem;
  border: none;
  min-width: 150px;

  &:active {
    background-color: ${COLORS.LIGHT_GRAY};
  }
`;

export interface IListProps {
  isOpen: boolean;
}

/**
 * @name StyledDropdownList
 * @description Styled Dropdown List
 */
export const StyledDropdownList = styled.ul<IListProps>`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  box-sizing: border-box;
  list-style: none;
  position: absolute;
  padding: 0.5rem;
  background-color: ${COLORS.WHITE};
  z-index: 2;
  min-width: 200px;
  transition: all 0.3s ease-out;
  margin: 0;

  &:before {
    content: " ";
    position: absolute;
    width: 0;
    height: 0;
    top: -10px;
    left: 50%;
  }
`;

/**
 * @name StyledDropdownListItem
 * @description Styled Dropdown List Item
 */
export const StyledDropdownListItem = styled.li`
  padding: 0.5rem;
  margin: 0;
  box-sizing: border-box;
  cursor: pointer;

  & > * {
    box-sizing: border-box;
  }

  &:hover {
    background-color: ${COLORS.LIGHT_GRAY};
  }
`;

/**
 * @name StyledDropdownButtonLabel
 * @description Styled Dropdown Menu Button Label
 */
export const StyledDropdownButtonLabel = styled.div`
  flex-grow: 1;
  text-align: left;
  margin-right: 1.5rem;
`;

/**
 * @name StyledDropdownIcon
 * @description Styled Dropdown Menu Button Icon
 */
export const StyledDropdownIcon = styled.div`
  padding: 0 0.8rem;
  margin: 0;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  border-left: 1px solid ${COLORS.LIGHT_TEXT};
  color: ${COLORS.LIGHT_TEXT};
`;
