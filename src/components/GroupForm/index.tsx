import { Button, Form, FormField } from "../Form/styles";
import { AddedUsersList, AddPhotoButton, GroupDescription, Header, Input, Label } from "../Modal/style";

function GroupForm() {
  return (
    <div>
      <Header>Create new group</Header>
      <Form>
        <Input type="text" placeholder="Group name" />
        <GroupDescription placeholder="Group description" />
        <AddPhotoButton><img alt="add" src="assets/add_photo.svg" /></AddPhotoButton>
        <FormField>
          <Label>Add friend to the group</Label>
          <Input type="text" placeholder="Type your friend's login" />
          <AddedUsersList>
            <li>Klementyna</li>
            <li>Kondziu</li>
            <li>Lucas</li>
          </AddedUsersList>
          <Button type="submit">Create</Button>
        </FormField>
      </Form>
    </div>

  );
}

export default GroupForm;