import { getFirestore, collection, query, where, getDocs, addDoc } from "firebase/firestore";
import { Activity, User } from "../interfaces/dbData";

class ActivityService {
  db = getFirestore();

  getMyUser = async (userId: string): Promise<User> => {
    let userRef: any = [];
    const q = query(collection(this.db, "users"), where("uid", "==", userId));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((document) => {
      userRef = (document.id, " => ", document.data());
    });
    return userRef;
  };

  getUsers = async () => {
    const response = await getDocs(collection(getFirestore(), "users"));
    return response?.docs.map((document) => document.data() as User);
  };

  getActivity = async (userId: string) => {
    let userRef: Activity[] = [];
    const q = query(collection(this.db, "users"), where("uid", "==", userId));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((document) => {
      userRef = (document.id, " => ", document.data().activities);
    });
    return userRef;
  };

  insert = async (activity: Activity) => {
    const activityRef = collection(this.db, "activities");
    try {
      const res = await addDoc(activityRef, {
        exercise: activity.exercise,
        date: activity.date,
        duration: activity.duration,
        score: activity.score,
      });
      return res.id;
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
}

export default new ActivityService();
