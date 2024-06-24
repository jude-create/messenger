  
import { initializeApp } from 'firebase/app';

import { getFirestore} from '@firebase/firestore';



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOkJgJo6dZZnfi5A6LEpOg1vGJ9tXNZFY",
  authDomain: "messenger-b9650.firebaseapp.com",
  projectId: "messenger-b9650",
  storageBucket: "messenger-b9650.appspot.com",
  messagingSenderId: "555045838792",
  appId: "1:555045838792:web:845bd6933554c2705deafd",
  measurementId: "G-1WZ1LD91KH"
};
  


// Initialize Firebase


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export  { db };
  // export default db;
  // Add a second document with a generated ID.




