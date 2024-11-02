import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

import { getAuth } from "firebase/auth";
// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFvKLRz52vSCRtOHBgWplg_oqGyMhjL38",
  authDomain: "books-app-3b6c7.firebaseapp.com",
  databaseURL: "https://books-app-3b6c7-default-rtdb.firebaseio.com",
  projectId: "books-app-3b6c7",
  storageBucket: "books-app-3b6c7.appspot.com",
  messagingSenderId: "997842433338",
  appId: "1:997842433338:web:cd91a7b5d70d9dee62cc03",
  measurementId: "G-Q34PBQ1H7X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export storage, database, and auth
export const storage = getStorage(app);
export const Database = getDatabase(app);
export const Firestore = getFirestore(app);
export const auth = getAuth(app);

export default app;