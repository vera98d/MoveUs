import { getFirestore, collection, query, where, doc, setDoc, getDocs } from "firebase/firestore";
import { Activity, User } from "../interfaces/dbData";
import { getUsers } from "./groupService";

class ActivityService {
  db = getFirestore();

  getActivity = async (userId: string | undefined) => {
    let userRef: any = null;
    const q = query(collection(this.db, "users"), where("uid", "==", userId));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((document) => {
      userRef = (document.id, " => ", document.data().activities);
    });
    return userRef;
  };

  insert = async (activity: Omit<Activity, "score">, user: string) => {
    console.log(activity);
    const activityRef = doc(collection(this.db, "activities"));
    try {
      await setDoc(activityRef, {
        exercise: activity.exercise,
        date: activity.date,
        duration: activity.duration,
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    try {
      let userRef: any = null;
      const q = query(collection(this.db, "users"), where("uid", "==", user));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((document) => {
        const documentID = document.id;
        userRef = doc(this.db, "users", documentID);
      });
      setDoc(userRef, {
        score: 8 * 7, lastActivity: activity.date, activities: activity.uid,
      }, { merge: true });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
}

export default new ActivityService();
