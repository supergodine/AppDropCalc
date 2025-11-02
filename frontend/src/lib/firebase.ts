import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// import { getAnalytics } from "firebase/analytics"; // Commented out - não usado ainda

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyBKjN7vrW3sAOVlnlTxVkNvd_9sIYr7s",
  authDomain: "dropcalc-11fd7.firebaseapp.com",
  projectId: "dropcalc-11fd7",
  storageBucket: "dropcalc-11fd7.firebasestorage.app",
  messagingSenderId: "779840470463",
  appId: "1:779840470463:web:62b5e584a22c8028a4750a",
  measurementId: "G-0698YWBH4J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Analytics (optional) - apenas se necessário
// const analytics = getAnalytics(app);

export default app;