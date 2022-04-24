import { getFirestore, collection, getDocs } from "firebase/firestore";

class ExerciseService {
  getAll = async () => {
    const docRef = collection(getFirestore(), "exercises");
    const querySnapshot = await getDocs(docRef);
    return querySnapshot.docs.map((doc) => ({ ...doc.data() }));
  };
}

export default new ExerciseService();