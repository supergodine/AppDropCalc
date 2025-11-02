import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
// This is a demo configuration for development
const firebaseConfig = {
  apiKey: "AIzaSyDemo-DemoApiKey-DemoApiKey-DemoApiKey",
  authDomain: "dropcalc-demo.firebaseapp.com",
  projectId: "dropcalc-demo",
  storageBucket: "dropcalc-demo.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:demoappid123456789"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// For development, you can use the Firebase Auth emulator
// Uncomment the lines below if you want to use the emulator
// import { connectAuthEmulator } from 'firebase/auth';
// if (location.hostname === 'localhost') {
//   connectAuthEmulator(auth, 'http://localhost:9099');
// }

export default app;