// полученные элементы со страницы 
const set = document.querySelector('#set');
const get = document.querySelector('#get');
const reg = document.querySelector('#reg');
const login = document.querySelector('#login');

// выдает firebase при создании нового приложения
const API_KEY = "AIzaSyBc9AB8NgtqH6AtmW1YHX0HgebL-bhaT-Q";
let idToken = '';

// // ссылка для регистрации в firebase
// // ссылка в документации https://firebase.google.com/docs/reference/rest/auth#section-create-email-password
const REG_URL = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key='

reg.addEventListener('click', async () => {
   // запрос на регистрацию
   const res = await fetch(REG_URL + API_KEY, { 
      method: 'POST',
      headers: {
         'Content-Type': 'application/json'
      },
      body: JSON.stringify({
         email: 'D@mail.ru',
         password: '123456789',
         returnSecureToken: true
      })
   })
   const data = await res.json();
   console.log('data: ', data);
})


// добавление данных в бд
//  SET_DATA_URL доступен по ссылке документации https://firebase.google.com/docs/reference/rest/database
//  "/users" добавил сам тем самымдобавляется столбец в таблице БД
const SET_DATA_URL = 'https://fir-test-prog-glo-default-rtdb.firebaseio.com/users';
const body = {
   name: 'Xasan',
   bio: 'IT-Proger'
};

set.addEventListener('click', async () => {
   const res = await fetch(`${SET_DATA_URL}/${body.name}.json?auth=${idToken}`, {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(body)
   })
   const data = await res.json();
   console.log('data: ', data);
})


// ЛОГИН
//  SET_DATA_URL доступен по ссылке документации https://firebase.google.com/docs/reference/rest/database
//  "/users" добавил сам тем самымдобавляется столбец в таблице БД
const LOGIN_USER_URL = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=';

login.addEventListener('click', async () => {
   const res = await fetch(LOGIN_USER_URL + API_KEY, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
         email: 'd@mail.ru',
         password: '123456789',
         returnSecureToken: true
      })
   })
   const data = await res.json();
   console.log('data: ', data);
   idToken = data.idToken;
})