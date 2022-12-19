import { FC } from "react";
import { AvatarSizes, StyledAvatar } from "./AvatarStyles";
import UserFallback from "../../../assets/user-default.png";

export interface IAvatarProps {
  src?: string;
  size?: keyof typeof AvatarSizes;
  username?: string;
}

export const Avatar: FC<IAvatarProps> = ({
  src,
  size,
  username,
}: IAvatarProps) => {
  let avatarImage = <img src={UserFallback} alt={username} />;
  if (src) {
    avatarImage = <img src={src} alt={username} />;
  }

  return (
    <StyledAvatar size={size} src={src} username={username}>
      {avatarImage}
    </StyledAvatar>
  );
};

Avatar.defaultProps = {
  src: UserFallback,
  size: "medium",
  username: "not found",
};
