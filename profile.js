import { auth, db } from "./firebase.js";
import {
  doc, getDoc, updateDoc
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

auth.onAuthStateChanged(async user => {
  if (!user) return location.href = "login.html";
  document.getElementById("email").textContent = user.email;

  const ref = doc(db, "users", user.uid);
  const snap = await getDoc(ref);
  document.getElementById("bio").value = snap.data().bio;

  document.getElementById("save").onclick = async () => {
    await updateDoc(ref, {
      bio: document.getElementById("bio").value
    });
    alert("Saved!");
  };
});
