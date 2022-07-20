import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCrYZAFgJwb0GXep1WiDmAMe-IBZ-Ntgzw",
  authDomain: "firechat-38cb1.firebaseapp.com",
  projectId: "firechat-38cb1",
  storageBucket: "firechat-38cb1.appspot.com",
  messagingSenderId: "876570129135",
  appId: "1:876570129135:web:93bb6551c113545d56211a",
  measurementId: "G-74D2BNV8XG"
})

const db = firebaseApp.firestore();

const auth = firebase.auth();

export{db, auth}