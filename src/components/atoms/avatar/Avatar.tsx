import { FC } from "react";
import { AvatarSizes, StyledAvatar } from "./AvatarStyles";

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
  let avatarImage = <img src="/assets/user-default.png" alt={username} />;
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
  src: "/assets/user-default.png",
  size: "medium",
  username: "not found",
};
