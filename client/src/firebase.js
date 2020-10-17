import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUtOhiijjFHlrd2TbwtwMTfV8Tt8ItqfI",
  authDomain: "clone-9ecc3.firebaseapp.com",
  databaseURL: "https://clone-9ecc3.firebaseio.com",
  projectId: "clone-9ecc3",
  storageBucket: "clone-9ecc3.appspot.com",
  messagingSenderId: "1092049119736",
  appId: "1:1092049119736:web:ba7a9a9ffc87b8b6898e0d",
  measurementId: "G-B8036XVRFN",
};

// initialize app
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};
