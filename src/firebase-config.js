import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDb3vr4Mc4sZytCp-MQioqPgyNj-7dtvqA",
    authDomain: "roommie-6c538.firebaseapp.com",
    projectId: "roommie-6c538",
    storageBucket: "roommie-6c538.appspot.com",
    messagingSenderId: "262222493692",
    appId: "1:262222493692:web:76184c7c41a8930f0b2479",
    measurementId: "G-G38ZJT268E"
  };

  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);