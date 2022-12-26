import { FC } from "react";
import { Avatar, IAvatarProps } from "../components/atoms/avatar/Avatar";

export default {
  title: "Avatar",
  component: Avatar,
};

const AvatarBase: FC<IAvatarProps> = ({ src, ...props }) => (
  <div>
    <Avatar src={src || "/assets/user-default.jpg"} {...props} />
  </div>
);

export const Medium = () => <AvatarBase size="medium" username="John Doe" />;
