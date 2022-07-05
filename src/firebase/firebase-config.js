import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB21XQWiIesEY6ZHBJlM-ngvv6JPZlaHMc",
  authDomain: "deveo-4c013.firebaseapp.com",
  projectId: "deveo-4c013",
  storageBucket: "deveo-4c013.appspot.com",
  messagingSenderId: "698853162002",
  appId: "1:698853162002:web:f16c06383a06155631accb"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
