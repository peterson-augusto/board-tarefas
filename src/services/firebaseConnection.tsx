import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // para conectar ao banco de dados

const firebaseConfig = {
    apiKey: "AIzaSyB4sZBxpqFuBwzzsaZhwLNJPI8bsihmZYc",
    authDomain: "tarefasplus-3b49c.firebaseapp.com",
    projectId: "tarefasplus-3b49c",
    storageBucket: "tarefasplus-3b49c.appspot.com",
    messagingSenderId: "43771167352",
    appId: "1:43771167352:web:3e9d95d074b46299ece38d"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp)

export { db }