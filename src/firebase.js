import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBPAmvcka4V5-fPlj2yGylE3LqEfs93y40",
  authDomain: "linkedin-clone-cb7d9.firebaseapp.com",
  projectId: "linkedin-clone-cb7d9",
  storageBucket: "linkedin-clone-cb7d9.appspot.com",
  messagingSenderId: "1083876932308",
  appId: "1:1083876932308:web:a73c1d67f149a7d6a39941"
}; 

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();


export {db, auth};