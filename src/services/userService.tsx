import { collection, doc, getDocs, getFirestore, query, where } from "firebase/firestore";
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

  getAllUsers = async () => {
    const response = await getDocs(collection(getFirestore(), "users"));
    return response?.docs.map((docUser) => docUser.data() as User);
  };
}

export default new UserService();
