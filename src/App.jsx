import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import { Toaster } from 'react-hot-toast';
import { useContext, useEffect } from 'react';
import DataContext from './Context/UserContext/DataContext';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from './Firebase/firebase';
import { getItem, setItem } from './Firebase/addData';

function App() {
  const {setData} = useContext(DataContext);
  const getLocalData = getItem('Id')
  useEffect(() => {
    // Reference to the collection
    const collectionRef = collection(db, (getLocalData|| 'Link'));

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

  useEffect(()=>{
    if(getLocalData === '' || getLocalData === undefined){
      setItem("Id",Math.random().toString(36).substr(2, 9));
    } 
  },[getLocalData])
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:Id" element={<>Hello /about</>} />
        </Routes>
      </Router>

      <Toaster
  position="top-center"
  reverseOrder={true}
  toastOptions={{
    duration: 2000,
  }}
/>
    </>
  )
}

export default App
