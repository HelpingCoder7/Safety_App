import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import {getFirestore} from 'firebase/firestore'

export const firebaseConfig = {
    apiKey: "AIzaSyB9VwjIwKCTLirKztvx1lSRlTHCo7FetHc",
    authDomain: "native-auth-bae11.firebaseapp.com",
    projectId: "native-auth-bae11",
    storageBucket: "native-auth-bae11.appspot.com",
    messagingSenderId: "154136343962",
    appId: "1:154136343962:web:447f110b8d3e65dabbb623"
  };

 app = firebase.initializeApp(firebaseConfig)

 export const db = getFirestore(app)