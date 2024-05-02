import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCGxYWWxQLAOv8SNPMfbze1dzru8H1zn6M",
  authDomain: "my-react-blog-2911d.firebaseapp.com",
  projectId: "my-react-blog-2911d",
  storageBucket: "my-react-blog-2911d.appspot.com",
  messagingSenderId: "891613527900",
  appId: "1:891613527900:web:cd1a8b4c1354cbc2d68b99"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(

  <BrowserRouter>
  <App />
  </BrowserRouter>
    

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
