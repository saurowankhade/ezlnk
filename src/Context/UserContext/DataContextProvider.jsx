import { useEffect, useState } from "react";
import DataContext from "./DataContext";
import addFirebase, { getItem } from "../../Firebase/addData";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../Firebase/firebase";

const DataContextProvider = ({children})=>{
    const [data,setData] = useState([]);
    const getLocalData = getItem('Id');
    useEffect(() => {
      // Reference to the collection
      const collectionRef = collection(db, (getLocalData || 'Link'));
  
      // Set up real-time listener
      const unsubscribe = onSnapshot(collectionRef, (snapshot) => {
        if (snapshot.empty) {
          console.log('No documents available.');
          setData([]); // Set an empty array if no documents
          return;
        }
  
        // Map the document data to an array and update the state
        const newDocuments = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setData(newDocuments);
      }, (error) => {
        console.error('Error listening for updates:', error);
      });
   
      // Cleanup listener when the component unmounts
      return () => {
        unsubscribe();
      };
    }, [getLocalData, setData]);

    return (
        <DataContext.Provider value={{data,setData}}>

            {children}

        </DataContext.Provider>
    )
}
export default DataContextProvider