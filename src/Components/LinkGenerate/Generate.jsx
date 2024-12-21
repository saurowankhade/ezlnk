import { useContext, useEffect } from "react"
import DataContext from "../../Context/UserContext/DataContext"

const Generate = () => {
    const { data } = useContext(DataContext);
    useEffect(()=>{
        console.log(data);
        
    })
    return (

        <div className="primaryInformation  container mx-auto  my-3 px-5 sm:px-10 md:px-16 lg:px-32 md:w-[700px]">

            <div id="mainInformation" className="shadow-md p-2 border rounded-lg">
                <h2 className="text-center font-bold">Your Links</h2>
                <div className=" flex flex-col ">
                   <div>
                    <a href="">ezlnk.vercel.app</a>
                   </div>
                </div>

            </div>

        </div>
    )
}

export default Generate
