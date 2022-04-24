import { collection, getDocs, increment, getDoc, getDocsFromServer, getFirestore, query, where, doc, setDoc, Firestore, updateDoc } from "firebase/firestore";
import { User } from "../interfaces/dbData";
import { useAuthState } from "react-firebase-hooks/auth";
import authService from "./authService";

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

  getRef = async (userId: string | undefined) => {
    let userRef: any = null;
    const q = query(collection(this.db, "users"), where("uid", "==", userId));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((document) => {
      const documentID = document.id;
      userRef = doc(this.db, "users", documentID);
    });
    return userRef;
  };

  updateUser = async (
    uid: string,
    score?: number,
    lastActivity?: Date,
    group?: string,
    ownedGroups?: string,
    activities?: string,
  ) => {
    if (score) {
      this.getUser(uid).then((data) => {
        const newScore: number = Number(data.score) + Number(score);
        this.getRef(uid).then((d) => {
          setDoc(d, { score: newScore }, { merge: true });
        });
      });
    }
    if (lastActivity) {
      this.getRef(uid).then((d) => {
        setDoc(d, { lastActivity: lastActivity }, { merge: true });
      });
    }
    if (group) {
      this.getUser(uid).then((data) => {
        const newGroups = data.groups.push(group);
        this.getRef(uid).then((d) => {
          setDoc(d, { groups: newGroups }, { merge: true });
        });
      });
    }
    if (ownedGroups) {
      this.getUser(uid).then((data) => {
        const newOwnedGroups = data.ownedGroups.push(ownedGroups);
        this.getRef(uid).then((d) => {
          setDoc(d, { ownedGroups: newOwnedGroups }, { merge: true });
        });
      });
    }
    if (activities) {
      this.getUser(uid).then((data) => {
        const newActivities = data.activities.push(activities);
        this.getRef(uid).then((d) => {
          setDoc(d, { activities: newActivities }, { merge: true });
        });
      });
    }
  };
}
export default new UserService();
