import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { Group, User } from "../interfaces/dbData";

export const createGroup = async (group: Omit<Group, "uid">) => {
  await addDoc(collection(getFirestore(), "groups"), group);
};

export const getUsers = async () => {
  const response = await getDocs(collection(getFirestore(), "users"));
  return response?.docs.map((doc) => doc.data() as User);
};