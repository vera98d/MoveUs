import { getFirestore, collection, addDoc } from "firebase/firestore";
import { Group } from "../interfaces/dbData";

class GroupService {
  createGroup = async (group: Omit<Group, "uid">) => {
    await addDoc(collection(getFirestore(), "groups"), group);
  };
}

export default new GroupService();