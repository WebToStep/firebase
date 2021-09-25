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

const reg = document.querySelector('.reg');
const auth = document.querySelector('.auth');
const singOut = document.querySelector('.sing-out');
const update = document.querySelector('.update');
const verification = document.querySelector('.verification');
const deleteUser = document.querySelector('.delete');
const updatePassword = document.querySelector('.updatePassword');
const isLoggedIn = document.querySelector('.is-logged-in > span');

const email = 'xasik_on.kz@mail.ru';
const password = '123456';

// через Гугл
// auth.addEventListener('click', async () => {
//    await firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())
// });

reg.addEventListener('click', async () => {
   await firebase.auth().createUserWithEmailAndPassword(email, password)
   .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode == 'auth/weak-password') {
        console.warn('Пароль слишком слабый');
      } else {
         console.warn(errorMessage);
      }
      console.log(error);
    });
});
auth.addEventListener('click', async () => {
   await firebase.auth().signInWithEmailAndPassword(email, password)
   .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode === 'auth/wrong-password') {
        console.warn('не верный пароль.');
      } else {
         console.warn(errorMessage);
      }
      console.log(error);
    });
});
singOut.addEventListener('click', () => {
   firebase.auth().signOut();
})
update.addEventListener('click', async () => {
   const user = firebase.auth().currentUser
   // изменяем имя тут же можно и ссылку на фото
   await user.updateProfile({
      displayName: 'Рифат Мухамеджанов'
   })
   // изменяем email address
   try{
      await user.updateEmail('xas@mail.ru');
      console.log('email обновлен1');
   } catch(e) {
      const credential = firebase.auth.EmailAuthProvider.credential(user.email, prompt('Please enter password'));
      await user.reauthenticateWithCredential(credential);
      await user.updateEmail('xas2@mail.ru');
      console.log('email обновлен2');
   }
   console.log('user: ', user);
})
deleteUser.addEventListener('click', async () => {
   const user = firebase.auth().currentUser
  
   try{
      await user.delete();
      console.log('Акаунт удален1');
   } catch(e) {
      const credential = firebase.auth.EmailAuthProvider.credential(user.email, prompt('Please enter password'));
      await user.reauthenticateWithCredential(credential);
      await user.delete();
      console.log('Акаунт удален1');
   }
   console.log('user: ', user);
})
// https://firebase.google.com/docs/reference/js/v8/firebase.User#updatepassword
updatePassword.addEventListener('click', async () => {
   const user = firebase.auth().currentUser
  
   try{
      await user.updatePassword(prompt('Введите новый пароль'));
      console.log('Пароль изменен 1');
   } catch(e) {
      if (e.code === 'auth/weak-password') {
         console.warn('Пароль должен быть более 6 символов');
         await user.updatePassword(prompt('Введите новый больше 6 символов пароль'));
      }
      if (e.code === 'auth/requires-recent-login') {
         const credential = firebase.auth.EmailAuthProvider.credential(user.email, prompt('Введите действующий пароль'));
         await user.reauthenticateWithCredential(credential);
         await user.updatePassword(prompt('Введите новый пароль'));
      }

   }
   console.log('user: ', user);
})
verification.addEventListener('click', async () => {
   const user = firebase.auth().currentUser
   if (!user.emailVerified) {
      await user.sendEmailVerification();
   }
})

firebase.auth().onAuthStateChanged(user => {
   if(user){
      isLoggedIn.textContent = ' * ' + true + ' ' +  user.displayName;
      console.log('USER___:', user);
   } else {
      isLoggedIn.textContent = ' * ' + false;
   }
})