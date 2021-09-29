import firebase from "firebase/app";
import 'firebase/firestore';

import {postNode} from '../components/postNode';
import {renderInDocument} from '../utils';

export const outPost = () => {
   firebase.firestore()
      .collection('posts')
      // сортировка по меткам(лайки, время итд)
      .orderBy('likeCount')
      // метод фильтрации или поиска
      // .where('likeCount', '==', 22)
      // лимит на вывод первых строк из таблицы БД (например сейчас 2 поста) {так же есть лиминт на вывод последних итд}
      .limit(5)
      .onSnapshot(doc => {
         // обновление постов
         const posts = document.querySelectorAll('.post');
         if(posts) {
            posts.forEach(post => post.remove())
         }
         doc.docs.forEach(postData => {
            const post = postData.data();
            renderInDocument(postNode(postData.id, post), '.posts');
         })
      })

};