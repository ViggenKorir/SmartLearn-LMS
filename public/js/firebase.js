// src/js/firebase.js
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCArjIBIdqXuR6weJbUdgrEEXxHksrNq_Q",
      authDomain: "learning-management-plp.firebaseapp.com",
      projectId: "learning-management-plp",
      storageBucket: "learning-management-plp.appspot.com",
      messagingSenderId: "538227314071",
      appId: "1:538227314071:web:b1f6ba1c6b9efae52948d2",
      measurementId: "G-TV6KHWFD8K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
