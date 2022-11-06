// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCNfs5AxrUQRMD-5yruqTKxR4LUTYRVqRs",
    authDomain: "fir-76a81.firebaseapp.com",
    projectId: "fir-76a81",
    storageBucket: "fir-76a81.appspot.com",
    messagingSenderId: "1061402025115",
    appId: "1:1061402025115:web:9cdead6cd7b3e12abffa3e",
    measurementId: "G-QQ80H79236"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app