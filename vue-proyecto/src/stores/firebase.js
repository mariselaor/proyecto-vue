import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: 'AIzaSyC7V2FG5RD9fcDk01kIcf9-vWcXxW2ihTo',
  authDomain: 'horarios-6c098.firebaseapp.com',
  projectId: 'horarios-6c098',
  storageBucket: 'horarios-6c098.appspot.com',
  messagingSenderId: '272469144397',
  appId: '1:272469144397:web:c067da4d195934ce4afd04',
  measurementId: 'G-TNZFYLNS1D'
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };

