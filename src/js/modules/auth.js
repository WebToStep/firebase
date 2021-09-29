import firebase from "firebase/app";
import 'firebase/auth'

import {toggleUserModal} from '../index'

export const auth = () => {
   const userButton = document.querySelectorAll('.user');
   const modalUserSignOut = document.querySelector('.modal-user__sign-out');

   // вход через гугл
   const authGoogle = async e => {
      e.preventDefault();
      if(firebase.auth().currentUser) return

      const {user} = await firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider());
   }

   // выход из аккаунта
   const singOut = async e => {
      e.preventDefault();
      firebase.auth().signOut();
      toggleUserModal();
   }

   modalUserSignOut.addEventListener('click', singOut);
   userButton.forEach(button => button.addEventListener('click', authGoogle));
   



   // debuging временный вывод о вошедшем пользователе
   if(firebase.auth()){
      firebase.auth().onAuthStateChanged(user => {
         console.log('USER___:', user);
      })
   }
}

