import {getUrlParams, setUrlParams, renderPosts} from './library.js';
import {getPosts, getUsers} from './api.js';

export async function paginationNext(){
    let bodyPost = document.querySelector('.bodyPost');
    bodyPost.innerHTML = '';
    history.pushState({}, null, `http://127.0.0.1:5500?page=${parseInt(getUrlParams()[0] + 1)}&amount=${parseInt(getUrlParams()[1])}`);
    if(getUrlParams()[1] === 10){
        if(+getUrlParams()[0] > 10){
            bodyPost.innerHTML = 'Posts ended';
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
                renderPosts(posts, users)
            })
        }
    }
    if(getUrlParams()[1] === 5){
        if(+getUrlParams()[0] > 20){
            bodyPost.innerHTML = 'Posts ended';
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
                renderPosts(posts, users)
            })
        }
    }
    if(getUrlParams()[1] === 2){
        if(+getUrlParams()[0] > 50){
            bodyPost.innerHTML = 'Posts ended';
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
                renderPosts(posts, users)
            })
        }
    }
    
}

export async function paginationPrev(){
    let bodyPost = document.querySelector('.bodyPost');
    if(+getUrlParams()[0] > 1){
        bodyPost.innerHTML = '';
        history.pushState({}, null, `http://127.0.0.1:5500?page=${parseInt(getUrlParams()[0] - 1)}&amount=${parseInt(getUrlParams()[1])}`);
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
}


