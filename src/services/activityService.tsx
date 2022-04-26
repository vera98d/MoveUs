import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
  addDoc,
} from "firebase/firestore";
import { Activity } from "../interfaces/dbData";

class ActivityService {
  db = getFirestore();

  getActivityCollection = async (userId: string) => {
    const actRef: Activity[] = [];
    const q = query(
      collection(this.db, "activities"),
      where("uid", "==", userId)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((document) => {
      actRef.push(document.data() as Activity);
    });
    return actRef;
  };

  insert = async (activity: Activity, userId: string) => {
    const activityRef = collection(this.db, "activities");
    try {
      const res = await addDoc(activityRef, {
        exercise: activity.exercise,
        date: activity.date,
        duration: activity.duration,
        score: activity.score,
        uid: userId,
      });
      return res.id;
    } catch (e) {
      alert(e);
    }
  };
}

export default new ActivityService();
