import React from "react";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import SetAvatar from "./components/SetAvatar";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import Register from "./pages/Register";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxTVJsw6hs4In6TqR5xFQ156Drt1QlcXw",
  authDomain: "websocket-chatapp-1c459.firebaseapp.com",
  projectId: "websocket-chatapp-1c459",
  storageBucket: "websocket-chatapp-1c459.firebasestorage.app",
  messagingSenderId: "333793000397",
  appId: "1:333793000397:web:af7232ce9c8ffdb3a0a284",
  measurementId: "G-LN1367W10H",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/setAvatar" element={<SetAvatar />} />
        <Route path="/" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
}
