import { collection, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore";
import { User } from "../interfaces/dbData";

class UserService {
  db = getFirestore();

  getUser = async (userId: string | undefined): Promise<User> => {
    const q = query(collection(this.db, "users"), where("uid", "==", userId));
    const querySnapshot = await getDocs(q);

    return querySnapshot.docs.map((doc) => ({
      uid: doc.id,
      name: doc.data().name,
      surname: doc.data().surname,
      login: doc.data().login,
      password: doc.data().password,
      email: doc.data().email,
      score: doc.data().score,
      lastActivity: doc.data().lastActivity,
      groups: doc.data().groups,
      ownedGroups: doc.data().ownedGroups,
      activities: doc.data().activities,
    }))[0];
  };
}

export default new UserService();