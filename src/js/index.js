import firebase from "firebase/app";
import 'firebase/auth'

firebase.initializeApp({
   apiKey: "AIzaSyBc9AB8NgtqH6AtmW1YHX0HgebL-bhaT-Q",
   authDomain: "fir-test-prog-glo.firebaseapp.com",
   databaseURL: "https://fir-test-prog-glo-default-rtdb.firebaseio.com",
   projectId: "fir-test-prog-glo",
   storageBucket: "fir-test-prog-glo.appspot.com",
   messagingSenderId: "741916154072",
   appId: "1:741916154072:web:f941c4658d60395a7cdfad"
 });

const authGoogle = document.querySelector('.auth-google');
const authGithub = document.querySelector('.auth-github');
const authFacebook = document.querySelector('.auth-facebook');

authGoogle.addEventListener('click', async () => {
   const provider = new firebase.auth.GoogleAuthProvider();
   const userData = await firebase.auth().signInWithPopup(provider)
});


authGithub.addEventListener('click', async () => {
   const provider = new firebase.auth.GithubAuthProvider();
   const userData = await firebase.auth().signInWithPopup(provider)
});

authFacebook.addEventListener('click', async () => {
   const provider = new firebase.auth.FacebookAuthProvider();
   const userData = await firebase.auth().signInWithPopup(provider)
});

firebase.auth().onAuthStateChanged(user => {
   console.log('USER___:', user);
})