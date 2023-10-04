// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrL6m3KhREwYH8NpKVMk-bQ9MlZOAt3Iw",
  authDomain: "dragon-news-2f9e4.firebaseapp.com",
  projectId: "dragon-news-2f9e4",
  storageBucket: "dragon-news-2f9e4.appspot.com",
  messagingSenderId: "959431504549",
  appId: "1:959431504549:web:9c72053a15e7231738934c",
  measurementId: "G-Z56WTF1SRV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
