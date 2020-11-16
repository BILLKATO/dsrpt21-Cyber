import firebase from 'firebase';

//API KEY do Firebase
const config = {
    apiKey: "AIzaSyD6-a97oU2fvqfBBEk_oYaSn8G8UOklnjk",
    authDomain: "tars-iii.firebaseapp.com",
    databaseURL: "https://tars-iii.firebaseio.com",
    projectId: "tars-iii",
    storageBucket: "tars-iii.appspot.com",
    messagingSenderId: "211869638715",
    appId: "1:211869638715:web:72334e63e1b4129d0f3c1e",
    measurementId: "G-97BGPY394M"
  };
  
  // Inicializa o firebase
  const fire = firebase.initializeApp(config);

  export default fire;