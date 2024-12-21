import { db } from "./firebase";
import {collection, doc,getDoc,onSnapshot,setDoc, updateDoc} from "firebase/firestore";

class Firestore {
    async addToFirebase(collection, data, documentID) {
      try {
        await setDoc(doc(db, collection, documentID), data);
        return { status: 200, message: 'Data saved!' };
      } catch (error) {
        return { status: 500, message: error,Id:documentID };
      }
    }  

    async getAllData() {
      // Reference to the collection
      const collectionRef = collection(db, "Link");
    
      // Real-time listener using onSnapshot
      const unsubscribe = onSnapshot(collectionRef, (snapshot) => {
        if (snapshot.empty) {
          console.log('No documents available.');
          return;
        }
    
        // Map the document data to an array
        const documents = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        
        console.log(documents); // Handle the documents (you can set them in state here)
        return documents;
      }, (error) => {
        console.error('Error listening for updates:', error);
      });
    
      // Return unsubscribe function to remove listener when needed
      return unsubscribe;
    }

    async getOneData (collectionName,docsId)  {
      try {
        const docRef = doc(db, collectionName, docsId);
        const docSnap = await getDoc(docRef);
        return { status: 200, message: 'Data saved!' , data: docSnap.exists() ? docSnap.data() : "" };
        
      } catch (error) {
        return { status: 500, message: error , data: "" };
      }
    }

    async updateData (collectionName, docId, updatedData) {
      try {
        const docRef = doc(db, collectionName, docId); // Reference to the document
        await updateDoc(docRef, updatedData); // Update the document
        return { status: 200, message: 'Data saved!' };
      } catch (error) {
        return { status: 500, message: 'Data saved!',error };
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