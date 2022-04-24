import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import { User } from "../interfaces/dbData";

class UserService {
  db = getFirestore();

  getUser = async (userId: string | undefined): Promise<User> => {
    const q = query(collection(this.db, "users"), where("uid", "==", userId));
    const querySnapshot = await getDocs(q);

    return querySnapshot.docs.map((docu) => ({
      uid: docu.data().uid,
      name: docu.data().name,
      surname: docu.data().surname,
      login: docu.data().login,
      password: docu.data().password,
      email: docu.data().email,
      score: docu.data().score,
      lastActivity: docu.data().lastActivity,
      groups: docu.data().groups,
      ownedGroups: docu.data().ownedGroups,
      activities: docu.data().activities,
    }))[0];
  };
}

export default new UserService();