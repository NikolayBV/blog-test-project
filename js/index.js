import {getUrlParams, setUrlParams, renderPosts} from './library.js';
import {getPosts, getUsers} from './api.js';
import {paginationNext, paginationPrev} from './event.js';

let btnNext = document.querySelector('.btnPageNext');
let btnPrev = document.querySelector('.btnPagePrev');
let select = document.querySelector('.selectList');
let bodyPost = document.querySelector('.bodyPost');




if(!getUrlParams()[0] && !getUrlParams()[1]){
    setUrlParams();
    Promise.all([
        new Promise((resolve, reject) => {
            let posts = getPosts(getUrlParams()[0], getUrlParams()[1]);
            resolve(posts)
        }),
        new Promise((resolve, reject) => {
            let users = getUsers();
            resolve(users)
        })
    ]).then(([posts, users]) => {
        renderPosts(posts, users)
        btnNext.addEventListener('click', () => paginationNext());
        btnPrev.addEventListener('click', () => paginationPrev());
    })
    
}
else{
    Promise.all([
        new Promise((resolve, reject) => {
            let posts = getPosts(getUrlParams()[0], getUrlParams()[1]);
            resolve(posts)
        }),
        new Promise((resolve, reject) => {
            let users = getUsers();
            resolve(users)
        })
    ]).then(([posts, users]) => {
        renderPosts(posts, users);
        btnNext.addEventListener('click', paginationNext);
        btnPrev.addEventListener('click', paginationPrev);
    })
}


select.addEventListener('change', () => {
    bodyPost.innerHTML = '';
    if(select.value === 'five'){
        setUrlParams(5);
        Promise.all([
            new Promise((resolve, reject) => {
                let posts = getPosts(getUrlParams()[0], getUrlParams()[1]);
                resolve(posts)
            }),
            new Promise((resolve, reject) => {
                let users = getUsers();
                resolve(users)
            })
        ]).then(([posts, users]) => {
            renderPosts(posts, users)
        })
    }
    else if(select.value === 'two'){
        setUrlParams(2);
        Promise.all([
            new Promise((resolve, reject) => {
                let posts = getPosts(getUrlParams()[0], getUrlParams()[1]);
                resolve(posts)
            }),
            new Promise((resolve, reject) => {
                let users = getUsers();
                resolve(users)
            })
        ]).then(([posts, users]) => {
            renderPosts(posts, users)
        })
    }
    else if(select.value === 'ten'){
        setUrlParams(10);
        Promise.all([
            new Promise((resolve, reject) => {
                let posts = getPosts(getUrlParams()[0], getUrlParams()[1]);
                resolve(posts)
            }),
            new Promise((resolve, reject) => {
                let users = getUsers();
                resolve(users)
            })
        ]).then(([posts, users]) => {
            renderPosts(posts, users)
        })
    }
})


