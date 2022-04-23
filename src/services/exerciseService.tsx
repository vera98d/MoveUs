import { getFirestore, collection, getDocs } from "firebase/firestore";
import { Exercise } from "../interfaces/dbData";

class ExerciseService {
  getAll = async () => {
    const docRef = collection(getFirestore(), "exercises");
    const querySnapshot = await getDocs(docRef);
    // const exerciseList: Omit<Exercise, "id">[] = [];
    const exerciseList: any[] = [];
    querySnapshot.forEach((doc) => {
      exerciseList.push(doc.data());
    });
    return exerciseList;
  };
}

export default new ExerciseService();