import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyBS-5J4Ee9QeoJG2wR4Tz0mgA3djE9fwu4",
  authDomain: "crwn-db-a1665.firebaseapp.com",
  databaseURL: "https://crwn-db-a1665.firebaseio.com",
  projectId: "crwn-db-a1665",
  storageBucket: "",
  messagingSenderId: "669664318036",
  appId: "1:669664318036:web:152403fdefc906ad"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)