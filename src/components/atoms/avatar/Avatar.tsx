import { FC } from "react";
import { IStyledAvatarProps, StyledAvatar } from "./AvatarStyles";

export interface IAvatarProps extends IStyledAvatarProps {
  src?: string;
  username?: string;
}

/**
 * Rounded Avatar component that displays profile picture.
 * @memberof Atoms
 * @exports Avatar
 */
export const Avatar: FC<IAvatarProps> = ({
  src,
  size,
  username,
}: IAvatarProps) => {
  let avatarImage = <img src="/assets/user-default.jpg" alt="user" />;
  if (src) {
    avatarImage = <img src={src} alt={username} />;
  }

  return <StyledAvatar size={size}>{avatarImage}</StyledAvatar>;
};

Avatar.defaultProps = {
  src: "/assets/user-default.jpg",
  username: "not found",
};
