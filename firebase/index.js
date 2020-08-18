import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyBNySxB8hov1yN5iNakDzPUJ8z2HbQSSWA",
  authDomain: "d-table-17395.firebaseapp.com",
  databaseURL: "https://d-table-17395.firebaseio.com",
  projectId: "d-table-17395",
  storageBucket: "d-table-17395.appspot.com",
  messagingSenderId: "271443263225",
  appId: "1:271443263225:web:ef19218a79c1f9ba7e2c28",
  measurementId: "G-K9Z5JH7X49",
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
googleAuthProvider.addScope("profile");
googleAuthProvider.addScope("email");

const facebookAuthprovider = new firebase.auth.FacebookAuthProvider();
facebookAuthprovider.addScope("user_birthday");

const githubAuthProvider = new firebase.auth.GithubAuthProvider();
githubAuthProvider.addScope("repo");

const twitterAuthProvider = new firebase.auth.TwitterAuthProvider();

const auth = firebase.auth();

export {
  firebase,
  auth,
  googleAuthProvider,
  facebookAuthprovider,
  githubAuthProvider,
  twitterAuthProvider,
};
