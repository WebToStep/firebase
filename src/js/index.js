import firebase from "firebase/app";
import 'firebase/auth';
import './modules/firebaseConfig';
import './modules/menu';

import {auth} from'./modules/auth'
import {outPost} from './modules/outPost'
import {addPost} from './modules/addPost';
import {managePost} from './modules/managePost';

// styles import
import '../css/normalize.css';
import '../css/style.css';
import '../css/css.css';



outPost();
auth();

export const toggleUserModal = () => document.querySelector('.modal-user').classList.toggle('hide');

firebase.auth().onAuthStateChanged(user => {
   const userAvatar = document.querySelectorAll('.user-avatar');
   const userName = document.querySelectorAll('.user-name');
   const userButton = document.querySelectorAll('.user');

   if(user){
      userAvatar.forEach(i => i.src = user.photoURL)
      userName.forEach(i => i.textContent = user.displayName)
      userButton.forEach(i => i.addEventListener('click', toggleUserModal))
      
      addPost();
      managePost();
   } else {
      userButton.forEach(i => i.removeEventListener('click', toggleUserModal))
      userAvatar.forEach(i => i.src = './img/avatar.png');
      userName.forEach(i => i.textContent = 'Sing in')
   }
   console.log('USER___:', user);

})