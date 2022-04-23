import { collection, doc, getDocs, getFirestore, query, where } from "firebase/firestore";

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
}

export default new UserService();
