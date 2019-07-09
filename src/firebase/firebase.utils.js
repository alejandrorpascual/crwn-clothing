import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDz3E764AE1f_XJLIit4yX0_OnWtbBUd9k",
  authDomain: "crown-db-23aac.firebaseapp.com",
  databaseURL: "https://crown-db-23aac.firebaseio.com",
  projectId: "crown-db-23aac",
  storageBucket: "",
  messagingSenderId: "735137138987",
  appId: "1:735137138987:web:70bb5972b15732cf"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;