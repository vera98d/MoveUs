import { collection, getDocs, getFirestore, query, where, updateDoc, doc, setDoc, DocumentReference } from "firebase/firestore";
import { User } from "../interfaces/dbData";

class UserService {
  db = getFirestore();

  getUsers = async () => {
    const response = await getDocs(collection(getFirestore(), "users"));
    return response?.docs.map((document) => document.data() as User);
  };

  getUser = async (userId: string): Promise<User> => {
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

  getRef = async (userId: string) => {
    let userRef: DocumentReference;
    const q = query(collection(this.db, "users"), where("uid", "==", userId));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((document) => {
      const documentID = document.id;
      userRef = doc(this.db, "users", documentID);
    });
    return userRef!;
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
        const newGroups = data.groups;
        newGroups.push(group);
        this.getRef(uid).then((d) => {
          setDoc(d, { groups: newGroups }, { merge: true });
        });
      });
    }
    if (ownedGroups) {
      this.getUser(uid).then((data) => {
        const newOwnedGroups = data.ownedGroups;
        newOwnedGroups.push(ownedGroups);
        this.getRef(uid).then((d) => {
          setDoc(d, { ownedGroups: newOwnedGroups }, { merge: true });
        });
      });
    }
    if (activities) {
      this.getUser(uid).then((data) => {
        const newActivities = data.activities;
        newActivities.push(activities);
        this.getRef(uid).then((d) => {
          setDoc(d, { activities: newActivities }, { merge: true });
        });
      });
    }
  };

  getAllUsers = async () => {
    const response = await getDocs(collection(getFirestore(), "users"));
    return response?.docs.map((docUser) => docUser.data() as User);
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

  updateUserAvatar = async (userId: string, avatarUrl: string) => {
    const q = query(collection(this.db, "users"), where("uid", "==", userId));
    const querySnapshot = await getDocs(q);
    const user = querySnapshot.docs.find((d) => d.data().uid === userId);

    if (user) {
      await updateDoc(user.ref, { avatarUrl });
    }
  };
}
export default new UserService();
