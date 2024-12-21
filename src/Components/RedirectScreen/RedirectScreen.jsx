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
      
              if (fetchedData?.Link) {
                // Ensure the URL starts with "http" or "https"
                const validLink = fetchedData.Link.startsWith("http")
                  ? fetchedData.Link
                  : `https://${fetchedData.Link}`;
      
                // Open the link in the current tab
                window.location.href = validLink;
      
                // Update the device count asynchronously
                await addFirebase.updateData("Link", Id, {
                  [device]: Number(fetchedData[device] || 0) + 1,
                });
              } else {
                // Redirect to fallback if no link is found
                window.location.href = "https://ezlnk.vercel.app";
              }
            } else {
              // Fallback redirect for status !== 200
              window.location.href = "https://ezlnk.vercel.app";
            }
          } catch (error) {
            // Fallback redirect for errors
            window.location.href = "https://ezlnk.vercel.app";
          }
        };
      
        // Fetch and update only once
        fetchDataAndUpdate();
      }, [Id]);
      
      
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
