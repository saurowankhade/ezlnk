import { useEffect, useState } from "react";
import DataContext from "./DataContext";
import addFirebase from "../../Firebase/addData";

const DataContextProvider = ({children})=>{
    const [data,setData] = useState([]);

    useEffect(()=>{   
        const userData = addFirebase.getAllData();
        userData.then((da)=>{
          setData(da)
        })
      },[])

    return (
        <DataContext.Provider value={{data,setData}}>

            {children}

        </DataContext.Provider>
    )
}
export default DataContextProvider