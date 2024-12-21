import { useEffect, useState } from "react";
import Loading from "react-loading";
import { useParams } from "react-router-dom";
import addFirebase from "../../Firebase/addData";

const RedirectScreen = () => {
    const {Id} = useParams();
    const [data,setData] = useState([]);
    useEffect(() => {
        const fetchDataAndUpdate = async () => {
          try {
            const status = await addFirebase.getOneData("Link", Id);
      
            if (status.status === 200) {
              const fetchedData = status?.data;
              const device = getDeviceType();
      
              // Ensure fetchedData is valid and contains the link
              if (fetchedData?.Link) {
                // Open the link immediately
                window.open(fetchedData.Link, "_blank", "noopener,noreferrer");
      
                // Update the device count asynchronously
                await addFirebase.updateData("Link", Id, {
                  [device]: Number(fetchedData[device] || 0) + 1,
                });
              } else {
                // Redirect to fallback if no link is found
                window.open("https://ezlnk.vercel.app", "_blank", "noopener,noreferrer");
              }
            } else {
              // Fallback redirect for status !== 200
              window.open("https://ezlnk.vercel.app", "_blank", "noopener,noreferrer");
            }
          } catch (error) {
            // Fallback redirect for errors
            window.open("https://ezlnk.vercel.app", "_blank", "noopener,noreferrer");
          }
        };
      
        fetchDataAndUpdate();
      }, [Id]);
      
      
    useEffect(()=>{
        
    },[Id])
    function getDeviceType() {
        const width = window.innerWidth;
        if (width <= 768) {
          return "MobileClick";
        } else if (width > 768 && width <= 1024) {
          return "TabClick";
        } else {
          return "WebClick";
        }
      }
  return (
    <div className="w-full  flex items-center justify-center">
    Redirecting... <Loading type='bubbles' color='#000' height={'10%'} width={'10%'} /> 
    </div>
  )
}

export default RedirectScreen
