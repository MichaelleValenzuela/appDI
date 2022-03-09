import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

var firebaseConfig = {
  //Datos de firebase para la identificacion de la BD
  apiKey: "AIzaSyB1t3xDFerXgh0EcuE9_zMt1VjtiUkD95k",
  authDomain: "gastos-f1e3e.firebaseapp.com",
  projectId: "gastos-f1e3e",
  storageBucket: "gastos-f1e3e.appspot.com",
  messagingSenderId: "627514272217",
  appId: "1:627514272217:web:5373e83ad92c5cf45591c8"
};
initializeApp(firebaseConfig);

export const db = getFirestore();
