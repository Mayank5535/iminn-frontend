import firebase from "firebase";

var config = {
  apiKey: "AIzaSyDG5nbjfHS-iWMfiAV9LMCQb5UsL5vaklM",
  authDomain: "iminn-app.firebaseapp.com",
  projectId: "iminn-app",
  storageBucket: "iminn-app.appspot.com",
  messagingSenderId: "54775304977",
  appId: "1:54775304977:web:db888f3e8306e6bd39b2b0",
  measurementId: "G-M1NJNESK7Z",
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
} else {
  firebase.app(); // if already initialized, use that one
}

const db = firebase.firestore();

export default db;
