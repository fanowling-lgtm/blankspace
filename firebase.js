 // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyA40Rfaqmveb23Pr-71hDm6lnsObMQV9cg",
    authDomain: "socialmediathingy.firebaseapp.com",
    projectId: "socialmediathingy",
    storageBucket: "socialmediathingy.firebasestorage.app",
    messagingSenderId: "164520083450",
    appId: "1:164520083450:web:b8050f4ee4788414912e43",
    measurementId: "G-FSFE3Q2KDK"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
