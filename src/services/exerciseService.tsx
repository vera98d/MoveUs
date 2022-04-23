import { getFirestore, collection, getDocs } from "firebase/firestore";

class ExerciseService {
  getAll = async () => {
    const docRef = collection(getFirestore(), "exercises");
    const querySnapshot = await getDocs(docRef);
    return querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  };
}

export default new ExerciseService();