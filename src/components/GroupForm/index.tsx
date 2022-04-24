import { Button, Form, FormField, FormFieldError, Input } from "../Form/styles";
import { Header, ModalLabel } from "../Modal/style";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../../services/firebase";
import { useContext, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Group, User } from "../../interfaces/dbData";
import groupService from "../../services/groupService";
import userService from "../../services/userService";
import { ModalContext } from "../../context/ModalContextProvider";
import { AddPhoto, AddPhotoInput, Container, GroupDescription, GroupImage, GroupImageComponents, UsersMultiSelect } from "./style";
import { UserContext } from "../../context/UserContextProvider";

type FormFields = {
  name: string
  description: string
  images: FileList
  members: User[]
};

function GroupForm() {
  const modalContextValue = useContext(ModalContext);
  const [preview, setPreview] = useState<string | null>(null);
  const closeModalOnSuccess = () => {
    modalContextValue.setDisplayedComponent(null);
  };
  const { user } = useContext(UserContext);
  const { register, setValue, handleSubmit, formState: { errors }, watch } = useForm<FormFields>();
  const [users, setUsers] = useState<User[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    userService.getAllUsers()
      .then((data) => {
        if (data) {
          setUsers(data);
        }
      })
      .catch((err: unknown) => {
        if (err instanceof Error) {
          alert(err.message);
        }
      });
  }, []);

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    const file = data.images[0];
    setIsSubmitting(true);

    const storageRef = ref(storage, file.name);
    await uploadBytes(storageRef, file);
    const fileUrl = await getDownloadURL(storageRef);

    const group: Omit<Group, "uid"> = {
      name: data.name,
      imageUrl: fileUrl,
      description: data.description,
      members: data.members.map((member) => member.uid),
      owner: user!.uid,
    };

    try {
      await groupService.createGroup(group);
      closeModalOnSuccess();
    } catch (err: unknown) {
      setIsSubmitting(false);
      if (err instanceof Error) {
        alert(err.message);
      }
    }
  };

  watch(({ images }) => {
    if (!images || images.length === 0) {
      setPreview(null);
      return null;
    }
    const file = images[0];
    const reader = new FileReader();

    reader.onload = () => {
      setPreview(reader.result as string);
    };

    reader.readAsDataURL(file);
  });

  return (
    <Container>
      <Header>Create new group</Header>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormField>
          <Input
            {...register("name", {
              required: true,
              minLength: 3,
              maxLength: 20,
            })}
            type="text"
            placeholder="Group name"
          />
          <FormFieldError>
            {errors.name?.type === "required" && "Please enter group name"}
            {errors.name?.type === "minLength" && "Use at least 3 characters"}
            {errors.name?.type === "maxLength" && "You can use 20 characters at most"}
          </FormFieldError>
        </FormField>
        <FormField>
          <GroupDescription
            {...register("description", {
              required: true,
              minLength: 3,
              maxLength: 1500,
            })}
            placeholder="Group description"
          />
          <FormFieldError>
            {errors.description?.type === "required" && "Please enter group description"}
            {errors.description?.type === "minLength" && "Use at least 3 characters"}
            {errors.description?.type === "maxLength" && "You can use 1500 characters at most"}
          </FormFieldError>
        </FormField>
        <FormField>
          <GroupImageComponents>
            <label htmlFor="file-input">
              <AddPhoto alt="input" src="assets/add_photo.svg" />
            </label>
            <AddPhotoInput
              id="file-input"
              type="file"
              {...register("images", {
                required: true,
              })}
            />
            {preview && <GroupImage alt="preview" src={preview} />}
          </GroupImageComponents>
          <FormFieldError>
            {errors.images?.type === "required" && "Image is required"}
          </FormFieldError>
        </FormField>
        <FormField>
          <ModalLabel>Add friend to the group</ModalLabel>
          <UsersMultiSelect
            placeholder="Type your friend's login"
            disablePreSelectedValues
            selectedValues={users.filter((u) => u.uid === user?.uid)}
            options={users}
            displayValue="login"
            onSelect={(selectedList: User[]) => {
              setValue("members", selectedList);
            }}
            onRemove={(selectedList: User[]) => {
              setValue("members", selectedList);
            }}
          />
          <Button disabled={isSubmitting}>Create</Button>
        </FormField>
      </Form>
    </Container>
  );
}

export default GroupForm;