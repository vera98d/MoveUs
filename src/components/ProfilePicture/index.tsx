import { PhotoProfile } from "./style";

interface Props {
  avatarUrl?: string;
  onClick?: () => void;
}

const ProfilePicture = ({ avatarUrl, onClick }: Props) => {
  return (
    <PhotoProfile avatarUrl={avatarUrl} onClick={onClick} />
  );
};

export default ProfilePicture;