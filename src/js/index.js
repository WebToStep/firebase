import './modules/firebaseConfig'
import './modules/menu';

import {singIn} from'./modules/fbSingIn'
import {outPost} from './modules/outPost'
import {addPost} from './modules/addPost';
import {managePost} from './modules/managePost';

// styles import
import '../css/normalize.css';
import '../css/style.css';
import '../css/css.css';




outPost();
addPost();
singIn();
managePost();

