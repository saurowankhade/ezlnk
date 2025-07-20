import { useContext, useEffect, useState, useRef } from "react"
import DataContext from "../../Context/UserContext/DataContext"
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../Firebase/firebase";
import { getItem } from "../../Firebase/addData";
import toast from "react-hot-toast";
import QRCode from "qrcode";

const Generate = () => {
    const [data, setData] = useState([]);
    const getLocalData = getItem('Id');
    const canvasRefs = useRef({}); // Refs for QR canvases

    useEffect(() => {
        const collectionRef = collection(db, "Link");
        const unsubscribe = onSnapshot(collectionRef, (snapshot) => {
            if (snapshot.empty) {
                setData([]);
                return;
            }
            const newDocuments = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            const filteredData = newDocuments.filter((data) => data?.LocalId === getLocalData);
            setData(filteredData);
        }, (error) => {
            console.error('Error listening for updates:', error);
        });

        return () => unsubscribe();
    }, [getLocalData]);

    const handleCopyButton = (link) => {
        navigator.clipboard.writeText(link).then(() => {
            toast.success("Copied to clipboard!");
        });
    };

    const generateQR = async (key) => {
        const url = `https://ezlnk.vercel.app/${key}`;
        try {
            await QRCode.toCanvas(canvasRefs.current[key], url, { width: 180 });
            toast.success("QR code generated!");
        } catch (err) {
            console.error(err);
            toast.error("QR generation failed!");
        }
    };

    const downloadQR = (key) => {
        const canvas = canvasRefs.current[key];
        if (!canvas) return;
        const imageURL = canvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.href = imageURL;
        link.download = `${key}-qr.png`;
        link.click();
    };

    return (
        <div className="primaryInformation container mx-auto my-3 px-5 sm:px-10 md:px-16 lg:px-32 md:w-[700px]">
            {data.map((data) => (
                <div key={data.Key + data.Date} className="relative mt-2 flex flex-col gap-3 rounded-xl border border-gray-200 bg-white p-3 shadow-sm">
                    <div className="flex items-center justify-between gap-2">
                        <div className="min-w-0">
                            <a className="truncate font-semibold text-gray-800 hover:text-black w-32 block" href={`/${data?.Key}`} target="_blank" rel="noreferrer">
                                {`ezlnk.vercel.app/${data?.Key}`}
                            </a>
                            <a href={data?.Link} target="_blank" rel="noopener noreferrer" className="max-w-60 text-sm text-gray-400 hover:underline block">
                                {data?.Link}
                            </a>
                        </div>

                        <div className="flex items-center gap-2">
                            <button onClick={() => handleCopyButton(`ezlnk.vercel.app/${data?.Key}`)} className="p-1 border rounded hover:bg-gray-100">
                                Copy
                            </button>
                            <button onClick={() => generateQR(data?.Key)} className="p-1 border rounded hover:bg-gray-100">
                                Generate QR
                            </button>
                            <button onClick={() => downloadQR(data?.Key)} className="p-1 border rounded hover:bg-gray-100">
                                Download QR
                            </button>
                        </div>
                    </div>

                    {/* Hidden Canvas for QR */}
                    <canvas ref={(el) => (canvasRefs.current[data?.Key] = el)} style={{ display: "none" }} />

                    <div className="text-sm text-gray-500">{Number(data?.MobileClick) + Number(data?.TabClick) + Number(data?.WebClick)} clicks</div>
                </div>
            ))}
        </div>
    );
};

export default Generate;
