import { db } from "./firebase";
import {doc,setDoc} from "firebase/firestore";

class Firestore {
    async addToFirebase(collection, data, documentID) {
      try {
        await setDoc(doc(db, collection, documentID), data);
        return { status: 200, message: 'Data saved!' };
      } catch (error) {
        return { status: 500, message: error,Id:documentID };
      }
    }  
  }
  
  const firestore = new Firestore();
  export default firestore;

  export const setItem = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };
  
  export const getItem = (key) => {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : "";
  };