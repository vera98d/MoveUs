// userId: string\
// fetch user from user service
// show default or user.avatarUrl
// onCLick goes to profile

import { useEffect, useState } from "react";

import userService from "../../services/userService";
import PhotoProfile from "./style";

interface Props {
  userId: string;
  onClick?: () => void;
}

const ProfilePicture = ({ userId, onClick }: Props) => {
  const [avatarUrl, setAvatarUrl] = useState("");

  useEffect(() => {
    userService.getUserById(userId).then((data) => {
      if (data && data.avatarUrl) {
        setAvatarUrl(data.avatarUrl);
      }
    });
  }, [userId]);

  return (
    <PhotoProfile avatarUrl={avatarUrl} onClick={onClick} />
  );
};

export default ProfilePicture;