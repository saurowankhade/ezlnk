import { db } from "./firebase";
import {collection, doc,getDoc,setDoc} from "firebase/firestore";

class Firestore {
    async addToFirebase(collection, data, documentID) {
      try {
        await setDoc(doc(db, collection, documentID), data);
        return { status: 200, message: 'Data saved!' };
      } catch (error) {
        return { status: 500, message: error,Id:documentID };
      }
    }  

    async getAllUser(){
      try {
        // Reference to the collection
        const collectionRef = collection(db, "Link");

    // Get the documents based on the query
        const snapshot = await getDoc(collectionRef);
        
        if (snapshot.empty) {
          console.log('No matching documents.');
          return [];
        }
    
        // Map document data
        const documents = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        
        return documents;
      } catch (error) {
        console.error('Error fetching documents:', error);
        return [];
      }
    }
   
  }
  
  const addFirebase = new Firestore();
  export default addFirebase;

  export const setItem = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };
  
  export const getItem = (key) => {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : "";
  };