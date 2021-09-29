import firebase from "firebase/app";
import 'firebase/database';
import {outPost} from '../index'

const db = firebase.database();

export const managePost = () => {
   const showList = el => el.classList.toggle('hide');
   const hideList = el => el.classList.add('hide');

   const editPost = async (idPost, newText) => {
      await db.ref(`posts/${idPost}`).update({textPost: newText});
      outPost();
   }

   const deletedPost = async (idPost) => {
      console.log('ku');
      await db.ref(`posts/${idPost}`).remove();
      outPost();
   }

   const startEditPost = (parentPost) => {
      const input = parentPost.querySelector('.post-text');
      const editButtonSave = parentPost.querySelector('.edit-button');

      input.contentEditable = true;
      input.focus();
      hideList(parentPost.querySelector('.list-questions-post'));
      showList(editButtonSave);
   }

   const settingsPostHandler = ({target}) => {
      const getParentPost = () => target.closest('[data-id]');

      const postHeaderBuutton = target.closest('.post-header-button');
      const listQuestionsPost = target.closest('.list-questions-post');
      const editButtonSave = target.closest('.edit-button');

      // if(!listQuestionsPost){
      //    hideList(getParentPost().querySelector('.list-questions-post'));
      // }
      !listQuestionsPost && hideList(getParentPost().querySelector('.list-questions-post'));
      postHeaderBuutton && showList(getParentPost().querySelector('.list-questions-post'));
      editButtonSave && editPost(getParentPost().dataset.id, getParentPost().querySelector('.post-text').textContent.trim());

      switch (target.dataset.effect) {
         case 'edit':
            startEditPost(getParentPost());
            break;
         case 'deleted':
            deletedPost(getParentPost().dataset.id);
            break;
      }
   }

   const posts = document.querySelector('.posts');
   posts.addEventListener('click', settingsPostHandler);
}