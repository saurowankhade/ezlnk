// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics"; 

import { getEnv } from "./getEnv";
 
const firebaseConfig = {
    apiKey: getEnv.apiKey,
    authDomain: getEnv.authDomain,
    projectId: getEnv.projectId,
    storageBucket: getEnv.storageBucket,
    messagingSenderId: getEnv.messagingSenderId,
    appId: getEnv.appId,
    measurementId: getEnv.measurementId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // Pass the app instance
export const db = getFirestore(app);
export const analytics = getAnalytics(app); // Initialize Analytics
export default app;
