import { collection, doc, getDocs, getFirestore, query, updateDoc, where } from "firebase/firestore";
import { User } from "../interfaces/dbData";

class UserService {
  db = getFirestore();

  getUser = async (userId: string | undefined) => {
    let userRef: any = null;
    const q = query(collection(this.db, "users"), where("uid", "==", userId));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((document) => {
      const documentID = document.id;
      userRef = doc(this.db, "users", documentID);
    });
    return userRef;
  };

  getUserById = async (userId: string) => {
    const q = query(collection(this.db, "users"), where("uid", "==", userId));
    const querySnapshot = await getDocs(q);
    const user = querySnapshot.docs.find((d) => d.data().uid === userId);

    if (user) {
      return user.data() as User;
    }

    return undefined;
  };

  updateUser = async (userId: string, data: Partial<User>) => {
    const q = query(collection(this.db, "users"), where("uid", "==", userId));
    const querySnapshot = await getDocs(q);
    const user = querySnapshot.docs.find((d) => d.data().uid === userId);

    if (user) {
      await updateDoc(user.ref, data);
    }
  };
}

export default new UserService();
