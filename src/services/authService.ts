import { getFirestore, collection, addDoc } from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  Auth,
} from "firebase/auth";
import app from "./firebase";
import { FirebaseApp } from "firebase/app";
import { User } from "../interfaces/dbData";

class AuthService {
  auth: Auth;

  constructor(firebaseApp: FirebaseApp) {
    this.auth = getAuth(firebaseApp);
  }

  getAuth = () => this.auth;

  logInWithEmailAndPassword = async (email:string, password:string) => {
    try {
      await signInWithEmailAndPassword(this.auth, email, password);
    } catch (err: unknown) {
      if (err instanceof Error) {
        alert(err.message);
      }
    }
  };

  registerWithEmailAndPassword = async (
    name: User["name"],
    surname: User["surname"],
    login: User["login"],
    email: User["email"],
    password: User["password"],
  ) => {
    try {
      const res = await createUserWithEmailAndPassword(
        this.auth,
        email,
        password,
      );
      const { user } = res;
      await addDoc(collection(getFirestore(), "users"), {
        name,
        surname,
        login,
        email,
        uid: user.uid,
        authProvider: "local",
        score: 0.0,
        lastActivity: "",
        groups: [],
        ownedGroups: [],
        activities: [],
      });
    } catch (err: unknown) {
      if (err instanceof Error) {
        alert(err.message);
      }
    }
  };

  logout = () => {
    signOut(this.auth);
  };
}

export default new AuthService(app);
