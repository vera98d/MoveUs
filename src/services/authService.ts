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
      console.error(err);
      if (err instanceof Error) {
        alert(err.message);
      }
    }
  };

  registerWithEmailAndPassword = async (name: string, surname: string, login: string, email:string, password:string) => {
    try {
      const res = await createUserWithEmailAndPassword(
        this.auth,
         email,
        password
      );
      const user = res.user;
      await addDoc(collection(getFirestore(), "users"), {
        name,
        surname,
        login,
        email,
        uid: user.uid,
        authProvider: "local",
      });
    } catch (err: unknown) {
      console.error(err);
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
