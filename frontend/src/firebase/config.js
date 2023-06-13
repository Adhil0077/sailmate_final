
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAGuL6qkyi3H_pwG8eDZO8Gx2GvcUA63YI",
  authDomain: "sailmateotp.firebaseapp.com",
  projectId: "sailmateotp",
  storageBucket: "sailmateotp.appspot.com",
  messagingSenderId: "245717332620",
  appId: "1:245717332620:web:fc902e619aca2959d241a9",
  measurementId: "G-98EWL5LCCW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app