import { useState, useRef, useContext, useEffect } from "react";
import addFirebase, { getItem } from "../../Firebase/addData";
import Loading from 'react-loading';
import toast from "react-hot-toast";
import DataContext from "../../Context/UserContext/DataContext";

const Inputs = () => {
    const [isLoading, setIsLoading] = useState(false);
    const link = useRef();
    const keys = useRef();
    const {data} = useContext(DataContext);
    const getId = getItem('Id');
    useEffect(()=>{
        console.log("Local",getId);
        
    },[])
    const handleClick = () => {
        toast.dismiss();
        const Link = link.current.value;
        const Key = keys.current.value;
        if (Link === '' || Key === '') {
            toast.error('Fill all infromation')
        } else if(!isValidURL(Link)){
            toast.error('Invaild URL')
        } else if(Key.length > 10){
            toast.error('Only 10 character allowed');
        }
        else if (data.some(item => item.id === Key)) {
            toast.error('Already taken! Please select something else!')
        } else {
            setIsLoading(true);
            addFirebase.addToFirebase("Link", {
                Link:Link,
                Key:Key,
                MobileClick:0,
                TabClick:0,
                WebClick:0,
                Date:new Date(),
                LocalId:getId
            }, Key).then((status)=>{
                if(status.status === 200){
                    setIsLoading(false);
                    link.current.value = ''
                    keys.current.value = ''
                    toast.success('Added')
                } else{
                    setIsLoading(false)
                    toast.error('Something wrong happed!')
                }
            })
        }
    }

    function isValidURL(input) {
        if (!/^https?:\/\//i.test(input)) {
            input = `https://${input}`;
          }

          
        try {
          new URL(input); // If this doesn't throw, it's a valid URL
          return true;
        } catch (e) {
          return false; // Invalid URL
        }
      }
    return (
        <div className="primaryInformation  container mx-auto  my-3 px-5 sm:px-10 md:px-16 lg:px-32 md:w-[700px]">
            <div id="mainInformation" className="shadow-md p-2 border rounded-lg">
                <h2 className="text-center font-bold">Memorable Link</h2>
                <div className=" flex flex-col ">
                    <div className="flex items-center rounded-md border py-1 gap-2 mt-4    ">

                        <svg className="ms-2" width="18" height="18" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 26C20.8589 27.1483 21.9547 28.0984 23.2131 28.7859C24.4715 29.4734 25.863 29.8822 27.2933 29.9847C28.7236 30.0871 30.1592 29.8807 31.5027 29.3796C32.8462 28.8784 34.0662 28.0941 35.08 27.08L41.08 21.08C42.9016 19.194 43.9095 16.668 43.8867 14.046C43.864 11.424 42.8123 8.91589 40.9582 7.06181C39.1041 5.20773 36.596 4.15604 33.974 4.13326C31.352 4.11047 28.826 5.11842 26.94 6.94L23.5 10.36M28 22C27.1411 20.8517 26.0453 19.9016 24.7869 19.2141C23.5285 18.5266 22.137 18.1178 20.7067 18.0153C19.2764 17.9129 17.8408 18.1193 16.4973 18.6204C15.1538 19.1216 13.9338 19.9059 12.92 20.92L6.92 26.92C5.09842 28.806 4.09048 31.332 4.11326 33.954C4.13605 36.576 5.18774 39.0841 7.04182 40.9382C8.8959 42.7923 11.404 43.844 14.026 43.8667C16.648 43.8895 19.174 42.8816 21.06 41.06L24.48 37.64" stroke="#1E1E1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>



                        <input className=" w-full outline-none text-base  placeholder:text-sm text-black placeholder:text-gray-600" placeholder="Your link... eg[https://ezlnk.vercel.app]" type="text" ref={link}/>
                    </div>

                    <div className="flex items-center rounded-md border py-1 gap-2 mt-4    ">
                        <svg className="ms-2" width="18" height="18" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 38C6.9 38 5.95833 37.6083 5.175 36.825C4.39167 36.0417 4 35.1 4 34V14C4 12.9 4.39167 11.9583 5.175 11.175C5.95833 10.3917 6.9 10 8 10H40C41.1 10 42.0417 10.3917 42.825 11.175C43.6083 11.9583 44 12.9 44 14V34C44 35.1 43.6083 36.0417 42.825 36.825C42.0417 37.6083 41.1 38 40 38H8ZM8 34H40V14H8V34ZM16 32H32V28H16V32ZM10 26H14V22H10V26ZM16 26H20V22H16V26ZM22 26H26V22H22V26ZM28 26H32V22H28V26ZM34 26H38V22H34V26ZM10 20H14V16H10V20ZM16 20H20V16H16V20ZM22 20H26V16H22V20ZM28 20H32V16H28V20ZM34 20H38V16H34V20Z" fill="#1E1E1E" />
                        </svg>

                        <input className=" w-full placeholder:text-sm  placeholder:text-gray-600 rounded-md outline-none   text-base" placeholder="Keys... eg[ezlink]" type="text" ref={keys} />
                    </div>

                </div>



                <div className="flex w-full justify-center mt-4 mb-4">
                    {
                        isLoading ? <Loading type='bubbles' color='#000' height={'10%'} width={'10%'} /> :
                            <button onClick={handleClick} className="bg-[#000000] text-white rounded-full cursor-pointer px-4 py-1 text-lg shadow-xl hover:bg-[#000000e7]" >Generate</button>
                    }
                </div>

            </div>
        </div>
    )
}

export default Inputs
