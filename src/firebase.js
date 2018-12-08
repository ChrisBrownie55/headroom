import firebase from '@firebase/app';
import '@firebase/firestore';
import '@firebase/auth';

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyCVtceewgB4gEBltmwVntBAXBkDTqDIt2U',
  authDomain: 'headroom-18181.firebaseapp.com',
  databaseURL: 'https://headroom-18181.firebaseio.com',
  projectId: 'headroom-18181',
  storageBucket: 'headroom-18181.appspot.com',
  messagingSenderId: '862380939120',
};

firebase.initializeApp(config);

export default firebase;

export const firestore = firebase.firestore();
firestore.settings({ timestampsInSnapshots: true });
firestore.enablePersistence().catch(error => console.warn(error));

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
