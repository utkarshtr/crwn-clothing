import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCFAYy-i_Cq2Qq7DYjj1DrjLGBFLLCMKGk",
    authDomain: "crwn-db-7da1f.firebaseapp.com",
    databaseURL: "https://crwn-db-7da1f.firebaseio.com",
    projectId: "crwn-db-7da1f",
    storageBucket: "crwn-db-7da1f.appspot.com",
    messagingSenderId: "163566421759",
    appId: "1:163566421759:web:47a6ba340d02be91f0eeca",
    measurementId: "G-GCMVMR0Q5K"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
