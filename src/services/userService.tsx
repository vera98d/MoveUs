import { collection, doc, getDocs, getFirestore, query, where } from "firebase/firestore";

class UserService {
  db = getFirestore();

  getUser = async (user: string | undefined) => {
    let userRef: any = null;
    const q = query(collection(this.db, "users"), where("uid", "==", user));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((document) => {
      const documentID = document.id;
      userRef = doc(this.db, "users", documentID);
    });
    return userRef;
  };
}

export default new UserService();
