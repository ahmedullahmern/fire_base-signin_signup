// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyB9VRtdobLFN7AtYlEZfh3aaNpWyZDBv8s",
  authDomain: "my-first-project-dbd0a.firebaseapp.com",
  projectId: "my-first-project-dbd0a",
  storageBucket: "my-first-project-dbd0a.appspot.com",
  messagingSenderId: "166122349391",
  appId: "1:166122349391:web:ad6faba54c2810b3badb3a",
  measurementId: "G-GCZP6Y8CJ5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

const singup_container = document.getElementById("singup_container")
const singup_email = document.getElementById("singup_email")
const singup_password = document.getElementById("singup_password")
const singup_btn = document.getElementById("singup_btn")

singup_btn.addEventListener("click", creatuseraccount)

const singin_container = document.getElementById("singin_container")
const singin_email = document.getElementById("singin_email")
const singin_password = document.getElementById("singin_password")
const singin_btn = document.getElementById("singin_btn")
const createnewaccount = document.getElementById("createnewaccount")

singin_btn.addEventListener("click", singinaccount)

const Logout_container = document.getElementById("Logout_container")
const username_logout = document.getElementById("username_logout")
const Logout_btn = document.getElementById("Logout_btn")

Logout_btn.addEventListener("click", logoutaccount)

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    console.log("usser log in he")
    Logout_container.style.display = "block"
    singup_container.style.display = "none"
    singin_container.style.display = "none"
    username_logout.innerHTML=user.email
    // ...
  } else {
    Logout_container.style.display = "none";
    singup_container.style.display = "none";
    singin_container.style.display = "block";
    // User is signed out
    // ...
    console.log("user login nahi he");
  }
});


function creatuseraccount() {
  console.log(singup_email.value);
  console.log(singup_password.value);
  // console.log(singup_email.value);
  // console.log(singup_password.value);

  createUserWithEmailAndPassword(auth, singup_email.value, singup_password.value)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      console.log(user);
      // ...
      singin_email.value=""
      singin_password.value=""
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage)
      // ..
    });
}

function singinaccount() {
  signInWithEmailAndPassword(auth, singin_email.value, singin_password.value)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log("bana howahe account ");
      // ...
      singin_email.value=""
      singin_password.value=""
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage)
    });
}

createnewaccount.addEventListener("click",chupjao)
function chupjao(){
  singup_container.style.display="block"
  singin_container.style.display="none"
}

function logoutaccount() {
  signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
}