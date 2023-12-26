import {initializeApp} from "firebase/app"
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyA9Wq90-WiI-UzeNCFp6M2_8cHQV5xqlH8",
  authDomain: "mytodo-list-e3eed.firebaseapp.com",
  projectId: "mytodo-list-e3eed",
  storageBucket: "mytodo-list-e3eed.appspot.com",
  messagingSenderId: "223426713515",
  appId: "1:223426713515:web:d62d634fce98b764d164ee",
}

const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

const GoogleProvider = new GoogleAuthProvider()

export {auth, GoogleProvider}
