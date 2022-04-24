import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useContext } from "react";
import { UserContext } from "../../context/UserContextProvider";
import { storage } from "../../services/firebase";
import userService from "../../services/userService";
import { AddPhotoInput, StyledPhotoProfile } from "./style";

const EditableProfilePicture = () => {
  const { user, setUser, isLoading } = useContext(UserContext);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = async (e) => {
    if (!user || !e.target.files || !e.target.files[0]) {
      return;
    }

    const file = e.target.files[0];

    const storageRef = ref(storage, file.name);
    await uploadBytes(storageRef, file);
    const fileUrl = await getDownloadURL(storageRef);
    await userService.updateUserAvatar(user.uid, fileUrl);
    setUser({ ...user, avatarUrl: fileUrl });
  };

  if (!user || isLoading) {
    return null;
  }

  return (
    <>
      <label htmlFor="file-input">
        <StyledPhotoProfile avatarUrl={user.avatarUrl} />
      </label>
      <AddPhotoInput
        id="file-input"
        type="file"
        onChange={handleChange}
      />
    </>
  );
};

export default EditableProfilePicture;
