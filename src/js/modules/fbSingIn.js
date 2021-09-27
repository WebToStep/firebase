import firebase from "firebase/app";
import 'firebase/auth'

export const singIn = () => {
   const authGoogle = document.querySelector('.auth-google');
   authGoogle.addEventListener('click', async () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      const userData = await firebase.auth().signInWithPopup(provider)
   });
   
   if(firebase.auth()){
      firebase.auth().onAuthStateChanged(user => {
         console.log('USER___:', user);
      })
   }
}

