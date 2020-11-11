import firebase from 'firebase';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDU3iRPr1w_H8W4i3YnEappYguatCAjHa0",
    authDomain: "todo-343ab.firebaseapp.com",
    databaseURL: "https://todo-343ab.firebaseio.com",
    projectId: "todo-343ab",
    storageBucket: "todo-343ab.appspot.com",
    messagingSenderId: "145780351070",
    appId: "1:145780351070:web:e00cc98e26c593110e94cf",
    measurementId: "G-N40VDKB0FN"
  });


  const db = firebaseApp.firestore();

  export { db };