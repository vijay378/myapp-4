import firebase from 'firebase'
const firebaseConfig = {
   apiKey: "AIzaSyD1pJ91yqEBttKQltRllmgsfmyRKamT3Ds",

  authDomain: "project01-9c31a.firebaseapp.com",

  databaseURL: "https://project01-9c31a-default-rtdb.firebaseio.com",

  projectId: "project01-9c31a",

  storageBucket: "project01-9c31a.appspot.com",

  messagingSenderId: "632973090927",

  appId: "1:632973090927:web:962f8a2f804125f69d6d9a",

  measurementId: "G-KRRE6H72NN"

};

firebase.initializeApp(firebaseConfig);

export default firebase;
