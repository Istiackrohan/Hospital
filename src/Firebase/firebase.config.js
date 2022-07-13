import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD5LRIfIkUSoVzPBQlx5j1r3YF4tWRUzmo",
  authDomain: "hospital-c26ff.firebaseapp.com",
  projectId: "hospital-c26ff",
  storageBucket: "hospital-c26ff.appspot.com",
  messagingSenderId: "225058510480",
  appId: "1:225058510480:web:d5f9242085edf724bc6a15"
};

const initializeAuthentication = () => initializeApp(firebaseConfig);
const analytics = getAnalytics(initializeAuthentication());

export default initializeAuthentication;