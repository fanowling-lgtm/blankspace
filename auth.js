import { auth, db } from "./firebase.js";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

import {
  doc, setDoc
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

const email = document.getElementById("email");
const password = document.getElementById("password");
const error = document.getElementById("error");

document.getElementById("login").onclick = () => {
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then(() => location.href = "index.html")
    .catch(e => error.textContent = e.message);
};

document.getElementById("signup").onclick = () => {
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then(user => {
      setDoc(doc(db, "users", user.user.uid), {
        email: email.value,
        bio: "New user",
        created: Date.now()
      });
      location.href = "index.html";
    })
    .catch(e => error.textContent = e.message);
};
