import { FC } from "react";
import { Avatar, IAvatarProps } from "../components/atoms/avatar/Avatar";
import UserFallback from "../assets/user-default.png";

export default {
  title: "Avatar",
  component: Avatar,
};

const AvatarBase: FC<IAvatarProps> = ({ src, ...props }) => (
  <div>
    <Avatar src={src || UserFallback} {...props} />
  </div>
);

export const Medium = () => <AvatarBase size="medium" username="John Doe" />;
