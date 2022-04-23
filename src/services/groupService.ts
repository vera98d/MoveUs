import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { Group } from "../interfaces/dbData";

export const createGroup = async (group: Omit<Group, "uid">, onSuccess: () => void) => {
  try {
    await addDoc(collection(getFirestore(), "groups"), group);
    onSuccess();
  } catch (err: unknown) {
    console.log(err);
    if (err instanceof Error) {
      alert(err.message);
    }
  }
};

export const getUserIds = async () => {
  try {
    const response = await getDocs(collection(getFirestore(), "users"));
    return response?.docs.map((doc) => doc.data().login as string);
  } catch (err: unknown) {
    console.log(err);
    if (err instanceof Error) {
      alert(err.message);
    }
  }
};