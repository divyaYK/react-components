import styled from "styled-components";
import { COLORS } from "../../../shared/theme";
import { IAvatarProps } from "./Avatar";

export const AvatarSizes = {
  medium: 30,
};

export const StyledAvatar = styled.div<IAvatarProps>`
  background-color: ${COLORS.WHITE};
  display: inline-block;
  vertical-align: top;
  overflow: hidden;
  border-radius: 50%;
  height: ${AvatarSizes.medium}px;
  width: ${AvatarSizes.medium}px;
  border: 2px solid ${COLORS.WHITE};
  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;
