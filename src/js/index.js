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

const auth = document.querySelector('.auth');
const singOut = document.querySelector('.sing-out');
const update = document.querySelector('.update');
const verification = document.querySelector('.verification');
const deleteUser = document.querySelector('.delete');
const isLoggedIn = document.querySelector('.is-logged-in > span');

const email = 'xas@mail.ru';
const password = '12345';

auth.addEventListener('click', async () => {
   await firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())
});



firebase.auth().onAuthStateChanged(user => {
   if(user){
      isLoggedIn.textContent = ' * ' + true;
      console.log('USER___:', user);
   } else {
      isLoggedIn.textContent = ' * ' + false;
   }
})