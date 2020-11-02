import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyA7VYJNx4Gal3VmaHGP2dRCyfLKNlsP-Ik",
    authDomain: "crwn-db-97db4.firebaseapp.com",
    databaseURL: "https://crwn-db-97db4.firebaseio.com",
    projectId: "crwn-db-97db4",
    storageBucket: "crwn-db-97db4.appspot.com",
    messagingSenderId: "1018714229566",
    appId: "1:1018714229566:web:28eaaf5c7a0f14cf727a6f",
    measurementId: "G-Q1DH08P17N"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: "select_account"});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
