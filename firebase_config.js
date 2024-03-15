import firebase from "@react-native-firebase/app";
import auth from '@react-native-firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBhZq0fHzJD6Ae6LbWfLDqO-vtf0mD1GvE",
  authDomain: "easeseller-28311.firebaseapp.com",
  projectId: "easeseller-28311",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "114644931601",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase, auth };
