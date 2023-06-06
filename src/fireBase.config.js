import { initializeApp } from "firebase/app";
 
const firebaseConfig = {
  apiKey: "AIzaSyC2ICMeyw35Rfa07_HAJFaoXlrMsrVtTmw",
  authDomain: "forest-lounge.firebaseapp.com",
  projectId: "forest-lounge",
  storageBucket: "forest-lounge.appspot.com",
  messagingSenderId: "325018106990",
  appId: "1:325018106990:web:e4ea9cbe498d3abe7cfa7f",
};

 
export const app = initializeApp(firebaseConfig);
