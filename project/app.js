// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

(funtion() {
    const firebaseConfig = {
    apiKey: "AIzaSyA4k7xTnV69nGU-yhWRtBpm9r1Sw8QYrcw",
    authDomain: "hermione-v.firebaseapp.com",
    projectId: "hermione-v",
    storageBucket: "hermione-v.appspot.com",
    messagingSenderId: "868880718623",
    appId: "1:868880718623:web:e9250eb40ad79ecec9ee2a",
    measurementId: "G-43MBKW0C9P"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  

  // Get elements
  const txtemail = document.getElementById('exampleInputEmail1');
  const txtpass = document.getElementById('exampleInputPassword1');
  const btnsignin = document.getElementById('btnsignin');

  btnsignin.addEventListener('click', e => {
      //Get email and pass
      const email = txtemail.value.trim().toLowerCase();
      const pass = txtpass.value.trim();
      const auth = firebase.auth();
      // Sign in
      const promise = auth.signInWithEmailAndPassword(email, pass);
      promise
      .catch(e => console.log(e.message));
  });

    btnlogout.addEventListener('click', e=>{
        firebase.auth().signOut();
    });
  //Add realtime listener
  firebase.auth().onAuthStateChanged(firebaseUser => {
      if(firebaseUser) {
          console.log(firebaseUser);
      }
      else{
          console.log('not logged in');
          
      }
  });
});

  