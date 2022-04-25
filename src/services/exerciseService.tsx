import { getFirestore, collection, getDocs } from "firebase/firestore";
import { Exercise } from "../interfaces/dbData";

class ExerciseService {
  getAll = async () => {
    const docRef = collection(getFirestore(), "exercises");
    const querySnapshot = await getDocs(docRef);
    return querySnapshot.docs.map((doc) => ({ ...doc.data() }));
  };

  getRandomExercises = async (number: number): Promise<Exercise[]> => {
    function shuffleArray(array: any) {
      const newArray = array;
      for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [array[j], array[i]];
      }
      return newArray;
    }
    const exerciseArray: Promise<Exercise[]> = this.getAll().then((data) => {
      let newNumber: number;
      if (number > data.length) {
        newNumber = data.length;
      } else {
        newNumber = number;
      }
      const array: Exercise[] = shuffleArray(data).slice(0, newNumber);
      return array;
    });
    return exerciseArray;
  };
}
export default new ExerciseService();