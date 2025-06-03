// Replace with your actual Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCrSY2YZHe5d8m0Kbween9DYRWTs1TYi1I",
  authDomain: "smartslot-a0394.firebaseapp.com",
  projectId: "smartslot-a0394",
  appId: "1:725888200248:web:976cbd16c353d7347d00cd"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
