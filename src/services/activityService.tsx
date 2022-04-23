import { getFirestore, collection, query, where, doc, setDoc, getDocs } from "firebase/firestore";
import { Activity } from "../interfaces/dbData";

class ActivityService {
  db = getFirestore();

  insert = async (activity: Activity, userId: string) => {
    console.log(activity);
    const activityRef = doc(collection(this.db, "activities"));
    try {
      await setDoc(activityRef, {
        exercise: activity.exercise,
        date: activity.date,
        duration: activity.duration,
        score: activity.score,
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
}

export default new ActivityService();