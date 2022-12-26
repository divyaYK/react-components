import styled from "styled-components";
import { COLORS } from "../../../shared/theme";

export const AvatarSizes = Object.freeze({
  small: 15,
  medium: 30,
});

export interface IStyledAvatarProps {
  size?: keyof typeof AvatarSizes;
}

/**
 * @name StyledAvatar
 * @description Styled Div component with styles for child Img components
 * @param props
 * @param props.small - Fixes the size of the component to 15 px
 * @param props.medium - Fixes the size of the component to 30 px
 */
export const StyledAvatar = styled.div<IStyledAvatarProps>`
  background-color: ${COLORS.WHITE};
  display: inline-block;
  vertical-align: top;
  overflow: hidden;
  border-radius: 50%;
  height: ${(props) => (props.size && props.size === "small"
    ? `${AvatarSizes.small}px`
    : `${AvatarSizes.medium}px`)};
  width: ${(props) => (props.size && props.size === "small"
    ? `${AvatarSizes.small}px`
    : `${AvatarSizes.medium}px`)};
  border: 2px solid ${COLORS.WHITE};
  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;
