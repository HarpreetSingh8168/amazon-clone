import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyB6Sno5c2khalt-a3uNdtSnlG0n8r7Q0ao",
  authDomain: "clo-24ad6.firebaseapp.com",
  projectId: "clo-24ad6",
  storageBucket: "clo-24ad6.appspot.com",
  messagingSenderId: "215346743084",
  appId: "1:215346743084:web:2470d7391b60c4cc1d4e89",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { provider, auth,db};