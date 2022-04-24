import { getFirestore, collection, getDocs } from "firebase/firestore";
import { Exercise } from "../interfaces/dbData";

class ExerciseService {
  getAll = async () => {
    const docRef = collection(getFirestore(), "exercises");
    const querySnapshot = await getDocs(docRef);
    return querySnapshot.docs.map((doc) => ({ ...doc.data() }));
  };

  getRandomExercises = async (number: number) => {
    function shuffleArray(array: Exercise[]) {
      const newArray = array;
      for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [array[j], array[i]];
      }
      return newArray;
    }
    const array = this.getAll().then((data) => {
      console.log(data);
      // const newArray = shuffleArray(data);
    });
  };
}
export default new ExerciseService();