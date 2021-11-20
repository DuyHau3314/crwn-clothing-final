import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: 'AIzaSyDhud5Q1rDKbprrXOYOvyLr7E20NUEnKmg',
  authDomain: 'crwn-db-81c11.firebaseapp.com',
  projectId: 'crwn-db-81c11',
  storageBucket: 'crwn-db-81c11.appspot.com',
  messagingSenderId: '344809622175',
  appId: '1:344809622175:web:60025700cffbda8957f0aa',
  measurementId: 'G-ZT182K4NZ6',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
