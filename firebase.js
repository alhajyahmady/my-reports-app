// 🔹 Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-Xq75VxHyMiGXHahtR4C0KH1vKs7oP0g",
  authDomain: "daily-reports-app-bc7cf.firebaseapp.com",
  databaseURL: "https://daily-reports-app-bc7cf-default-rtdb.firebaseio.com",
  projectId: "daily-reports-app-bc7cf",
  storageBucket: "daily-reports-app-bc7cf.firebasestorage.app",
  messagingSenderId: "1007493011795",
  appId: "1:1007493011795:web:425b4681b84aa0aad6e9a6",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const database = firebase.database();
