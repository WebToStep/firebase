import firebase from "firebase/app";
import 'firebase/database';

import './modules/firebaseConfig'
import {singIn} from'./modules/fbSingIn'
import './modules/menu';

import {postNode} from './components/postNode';
import {renderInDocument} from './utils';
import {addPost} from './modules/addPost';
import {managePost} from './modules/managePost';

// styles import
import '../css/normalize.css';
import '../css/style.css';
import '../css/css.css';


export const outPost = () => {
   // обновление постов
   const posts = document.querySelectorAll('.post');
   if(posts) {
      posts.forEach(post => post.remove())
   }
   firebase.database()
      .ref('posts')
      // сортировка по меткам(лайки, время итд)
      .orderByChild('timestamp')
      // лимит на вывод первых строк из таблицы БД (например сейчас 2 поста) {так же есть лиминт на вывод последних итд}
      .limitToFirst(5)
      .on('child_added', (post) => {
         const data = post.val();
         renderInDocument(postNode(post.key, data), '.posts');
      })
      // получение
   // firebase.database()
   //    .ref('posts')
   //    .get('value', (post) => {
   //       const posts = document.querySelectorAll('.post');
   //       // if(posts) {
   //       //    posts.forEach(post => post.remove())
   //       // }
   //       // const data = post.val();
   //       // renderInDocument(postNode(post.key, data), '.posts')
   //       const data = post.val();
   //       for(const key in data)
   //       renderInDocument(postNode(post.key, data[key]), '.posts')
   //    })
};

outPost();
addPost();
singIn();
managePost();

