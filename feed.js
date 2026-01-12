import { auth, db } from "./firebase.js";
import {
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

import {
  collection, addDoc, query, orderBy, onSnapshot, doc, updateDoc, increment
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

const feed = document.getElementById("feed");
const postBtn = document.getElementById("postBtn");
const postText = document.getElementById("postText");

onAuthStateChanged(auth, user => {
  if (!user) location.href = "login.html";
});

postBtn.onclick = async () => {
  if (!postText.value) return;
  await addDoc(collection(db, "posts"), {
    text: postText.value,
    uid: auth.currentUser.uid,
    email: auth.currentUser.email,
    likes: 0,
    time: Date.now()
  });
  postText.value = "";
};

const q = query(collection(db, "posts"), orderBy("time", "desc"));

onSnapshot(q, snap => {
  feed.innerHTML = "";
  snap.forEach(docSnap => {
    const p = docSnap.data();
    const div = document.createElement("div");
    div.className = "post";
    div.innerHTML = `
      <b>${p.email}</b>
      <p>${p.text}</p>
      <button data-id="${docSnap.id}">♥ ${p.likes}</button>
    `;
    div.querySelector("button").onclick = async () => {
      await updateDoc(doc(db, "posts", docSnap.id), {
        likes: increment(1)
      });
    };
    feed.appendChild(div);
  });
});
