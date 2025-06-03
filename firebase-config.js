// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCrSY2YZHe5d8m0Kbween9DYRWTs1TYi1I",
  authDomain: "smartslot-a0394.firebaseapp.com",
  projectId: "smartslot-a0394",
  storageBucket: "smartslot-a0394.firebasestorage.app",
  messagingSenderId: "725888200248",
  appId: "1:725888200248:web:976cbd16c353d7347d00cd"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
