import { getFirestore, collection, addDoc } from "firebase/firestore";
import { Activity } from "../interfaces/dbData";

class ActivityService {
  db = getFirestore();

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