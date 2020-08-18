import {
  firebase,
  googleAuthProvider,
  facebookAuthprovider,
  githubAuthProvider,
  twitterAuthProvider,
} from "../firebase";

export function startGoogleLogin() {
  return firebase.auth().signInWithPopup(googleAuthProvider);
}

export function startFacebookLogin() {
  return firebase.auth().signInWithPopup(facebookAuthprovider);
}

export function startGithubLogin() {
  return firebase.auth().signInWithPopup(githubAuthProvider);
}

export function startTwitterLogin() {
  return firebase.auth().signInWithPopup(twitterAuthProvider);
}

export function startLogout() {
  return firebase.auth().signOut();
}
