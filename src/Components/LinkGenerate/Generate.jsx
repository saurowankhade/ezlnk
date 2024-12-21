import { useContext, useEffect } from "react"
import DataContext from "../../Context/UserContext/DataContext"
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../Firebase/firebase";
import { getItem } from "../../Firebase/addData";
import toast from "react-hot-toast";

const Generate = () => {
    const { data, setData } = useContext(DataContext);
    const getLocalData = getItem('Id');
    useEffect(() => {
        // Reference to the collection
        const collectionRef = collection(db, (getLocalData));

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
            console.log(newDocuments);
            
        }, (error) => {
            console.error('Error listening for updates:', error);
        });

        // Cleanup listener when the component unmounts
        return () => {
            unsubscribe();
        };
    }, [getLocalData, setData]);

    const handleCopyButton = (link)=>{
        navigator.clipboard.writeText(link).then(()=>{
            toast.success("Copied to clipboard!")
        })
    }
    return (

        <div className="primaryInformation  container mx-auto  my-3 px-5 sm:px-10 md:px-16 lg:px-32 md:w-[700px]">

         {
            data.map((data)=>(
                <div key={data.Key+data.Date} className="relative flex items-center justify-between gap-2 rounded-xl border border-gray-200 bg-white p-3 max-w-full shadow-none drop-shadow-sm">
                <div>
                 <div className="flex min-w-0 items-center gap-x-3"><div className="flex-none rounded-full border border-gray-200 bg-gradient-to-t from-gray-100 p-2">
                 </div>
                     <div className="min-w-0 overflow-hidden">
                        <div className="flex items-center gap-1 sm:gap-2 "><a className="truncate font-semibold text-gray-800 hover:text-black w-32" href={`ezlnk.vercel.app/${data?.Key}`} target="_blank" rel="noreferrer">{`ezlnk.vercel.app/${data?.Key}`}</a><div className="flex items-center gap-1 sm:gap-2">
                        
                        <button onClick={() => handleCopyButton(`ezlnk.vercel.app/${data?.Key}`)} className="relative group rounded-full p-1.5 transition-all duration-75 border border-gray-200 bg-gray-50 hover:scale-100 hover:bg-gray-100 active:bg-gray-100" type="button">
                        <span className="sr-only">Copy</span><svg fill="none" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="14" height="14" className="h-3.5 w-3.5"><path d="M8 17.929H6c-1.105 0-2-.912-2-2.036V5.036C4 3.91 4.895 3 6 3h8c1.105 0 2 .911 2 2.036v1.866m-6 .17h8c1.105 0 2 .91 2 2.035v10.857C20 21.09 19.105 22 18 22h-8c-1.105 0-2-.911-2-2.036V9.107c0-1.124.895-2.036 2-2.036z"></path></svg></button>
                        
                        </div></div>
                        
                        <div className="flex items-center gap-1"><svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400"><g fill="currentColor"><path d="M15.25,9.75H4.75c-1.105,0-2-.895-2-2V3.75" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><polyline fill="none" points="11 5.5 15.25 9.75 11 14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></polyline></g></svg>
                        <a href={data?.Link} target="_blank" rel="noopener noreferrer" className="max-w-60 truncate text-sm text-gray-400 underline-offset-4 transition-all hover:text-gray-700 hover:underline sm:max-w-72">{data?.Link}</a></div>
                        
                        </div></div>
                 </div>
     
                 <div>
                     <div className="flex items-center gap-2"><a target="_blank" className="block rounded-md border border-gray-200 bg-gray-50 transition-colors hover:bg-gray-100" data-state="closed" href="https://app.dub.co/share/dash_6NSA6vNm017MZwfzt8SubNSZ"><div className="flex items-center justify-center gap-1 px-1 py-[0.2rem] xs:px-2 sm:px-3"><svg height="18" width="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-700"><g fill="currentColor"><path d="M8.095,7.778l7.314,2.51c.222,.076,.226,.388,.007,.47l-3.279,1.233c-.067,.025-.121,.079-.146,.146l-1.233,3.279c-.083,.219-.394,.215-.47-.007l-2.51-7.314c-.068-.197,.121-.385,.318-.318Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" x1="12.031" x2="16.243" y1="12.031" y2="16.243"></line><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" x1="7.75" x2="7.75" y1="1.75" y2="3.75"></line><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" x1="11.993" x2="10.578" y1="3.507" y2="4.922"></line><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" x1="3.507" x2="4.922" y1="11.993" y2="10.578"></line><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" x1="1.75" x2="3.75" y1="7.75" y2="7.75"></line><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" x1="3.507" x2="4.922" y1="3.507" y2="4.922"></line></g></svg><div className="flex items-center whitespace-nowrap text-sm text-gray-500">{Number(data?.MobileClick)+Number(data?.TabClick)+Number(data?.WebClick)}<span className="ml-1 hidden sm:inline-block">clicks</span></div></div></a><button type="button" className="rounded-md border border-white px-1 py-2 transition-all duration-75 hover:bg-gray-50 focus:outline-none focus:ring-0 active:bg-gray-100"><span className="sr-only">Edit</span><svg fill="none" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="14" height="14" className="h-5 w-5 text-gray-500"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg></button></div>
                 </div>
                </div>
            ))
         }

        </div>
    )
}

export default Generate
