import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { collection, getDocs} from "firebase/firestore";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDpbz2tgXJxzbaHOW2l1L8sWa6bb79YfBo",
    authDomain: "kiasucareers.firebaseapp.com",
    projectId: "kiasucareers",
    storageBucket: "kiasucareers.appspot.com",
    messagingSenderId: "154158357170",
    appId: "1:154158357170:web:bafc4564df9d7f1fbb87ab",
    measurementId: "G-258SENTNQ6"
};

const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;
const db = getFirestore(firebaseApp);

const storage = getStorage(firebaseApp);
export { db, storage };
