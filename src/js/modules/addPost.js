import firebase from "firebase/app";
import 'firebase/database';

const db = firebase.database()

export const addPost = () =>{
   const createPostInput = document.querySelector('.create-post-input');
   const buttonSend = document.querySelector('.button-send');
   const defaultText = createPostInput.textContent;

   const focusInput = () => {
      createPostInput.textContent === defaultText && (createPostInput.textContent = '')
   };

   const blurInput = () => {
      createPostInput.textContent.trim() === '' && (createPostInput.textContent = defaultText);      
   };
   
   const handleInput = () => {
      createPostInput.textContent.trim() !== ''
      ? buttonSend.classList.remove('hide')
      : buttonSend.classList.add('hide');
   };

   const sendPost = async () => {

      if (defaultText !== createPostInput.textContent
         && createPostInput.textContent.trim() !== ''){
            const uid = Date.now()
            const postData = {
                textPost : createPostInput.textContent.trim(),
                likeCount : 0,
                postImage : "https://via.placeholder.com/1000",
                timestamp : firebase.database.ServerValue.TIMESTAMP,
                userAvatar : "https://via.placeholder.com/150",
                userName : "Vlad",
                uid: uid,
                comments : [ {
                   userName : "",
                   userText : "",
                   timestamp : "",
                } ],
               }

               //  вариант записи в бд из документации 
               // var postsList = firebase.database().ref('posts');
               // var newPostsList = postsList.push();
               // newPostsList.set(postData);

            const newPostKey = db.ref('posts').push().key
            await db.ref(`posts/${newPostKey}`).set(postData)
            createPostInput.textContent = ''
            handleInput()
            blurInput()
      }
   }

   createPostInput.addEventListener('focus', focusInput);
   createPostInput.addEventListener('blur', blurInput);
   createPostInput.addEventListener('input', handleInput);
   buttonSend.addEventListener('click', sendPost);
}