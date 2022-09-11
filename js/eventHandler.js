import {} from './library.js';
import {parseRecievedPosts, parseRecievedUsers,postsAndUsersLength} from './api.js';



export function firstLoadPage(url){
    window.onload = () => {
        window.history.pushState({}, null, `${url}/?page=1&amount=10`);
    }
}

export function setUrlParamForPage(url, page = 1, amount = 10){
    window.history.pushState({}, null, `${url}/?page=${page}&amount=${amount}`);
}


export function setMaxLengthForBtn(btn){
    postsAndUsersLength()
    .then(([posts, users]) => {
        btn.innerHTML = posts.length;
    })
}

export function removeClassActive(btn){
    btn.forEach((item) => item.classList.remove(''))
}































// export async function handlePaginationNext(){
//     let bodyPost = document.querySelector('.bodyPost');
//     bodyPost.innerHTML = '';
//     // todo исправить 7 строку, оптимизировать 
//     // почитать про pushState
//     //queryParams - возвращает параметры, подключить
//     history.pushState({}, null, `http://127.0.0.1:5500?page=${parseInt(getUrlParams()[0] + 1)}&amount=${parseInt(getUrlParams()[1])}`);
//     if(getUrlParams()[1] === 10){
//         if(+getUrlParams()[0] > 10){
//             bodyPost.innerHTML = 'Posts ended';
//         }
//         else{
//             Promise.all([
//                 new Promise((resolve, reject) => {
//                     let posts = getPosts(getUrlParams()[0], getUrlParams()[1]);
//                     resolve(posts)
//                 }),
//                 new Promise((resolve, reject) => {
//                     let users = getUsers();
//                     resolve(users)
//                 })
//             ]).then(([posts, users]) => {
//                 renderPosts(posts, users)
//             })
//         }
//     }
//     if(getUrlParams()[1] === 5){
//         if(+getUrlParams()[0] > 20){
//             bodyPost.innerHTML = 'Posts ended';
//         }
//         else{
//             Promise.all([
//                 new Promise((resolve, reject) => {
//                     let posts = getPosts(getUrlParams()[0], getUrlParams()[1]);
//                     resolve(posts)
//                 }),
//                 new Promise((resolve, reject) => {
//                     let users = getUsers();
//                     resolve(users)
//                 })
//             ]).then(([posts, users]) => {
//                 renderPosts(posts, users)
//             })
//         }
//     }
//     if(getUrlParams()[1] === 2){
//         if(+getUrlParams()[0] > 50){
//             bodyPost.innerHTML = 'Posts ended';
//         }
//         else{
//             Promise.all([
//                 new Promise((resolve, reject) => {
//                     let posts = getPosts(getUrlParams()[0], getUrlParams()[1]);
//                     resolve(posts)
//                 }),
//                 new Promise((resolve, reject) => {
//                     let users = getUsers();
//                     resolve(users)
//                 })
//             ]).then(([posts, users]) => {
//                 renderPosts(posts, users)
//             })
//         }
//     }
    
// }

// export async function handlePaginationPrev(){
//     let bodyPost = document.querySelector('.bodyPost');
//     if(+getUrlParams()[0] > 1){
//         bodyPost.innerHTML = '';
//         history.pushState({}, null, `http://127.0.0.1:5500?page=${parseInt(getUrlParams()[0] - 1)}&amount=${parseInt(getUrlParams()[1])}`);
//         Promise.all([
//             new Promise((resolve, reject) => {
//                 let posts = getPosts(getUrlParams()[0], getUrlParams()[1]);
//                 resolve(posts)
//             }),
//             new Promise((resolve, reject) => {
//                 let users = getUsers();
//                 resolve(users)
//             })
//         ]).then(([posts, users]) => {
//             renderPosts(posts, users)
//         })
//     }
// }

export async function handlePaginationChoose(page){
// 1. Сделать активной кнопку на которую нажал и сделать не активной кнопку со страницы которой пришел
// 2. В урл добавляю параметры
// 3. Делаю запрос на сервер
// 4. Отображаю посты
}
//todo: каждая функция начинается с handleDeletePost - обработчик события 
// сделать отдельную ветку SPA
