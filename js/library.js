import {deletePost} from './api.js';

export function getUrlParams(){
    let url = window.location.href;
    let myUrl = new URL(url);
    let paramPage = myUrl.searchParams.get('page');
    let paramAmount = myUrl.searchParams.get('amount');
    let arr = [+paramPage, +paramAmount]
    return arr;
}

export function setUrlParams(amount = 10){
    history.pushState({}, null, `http://127.0.0.1:5500?page=1&amount=${amount}`); 
}

export function renderPosts(posts, users){
    if(localStorage.length !== 0){
        posts.map((elem) => {
            let obj = getPostsFromLocalStorage();
            if(elem.id === obj.id){
                elem.title = obj.title;
                elem.body = obj.body;
            }
        })
    }
    let bodyPost = document.querySelector('.bodyPost');
    for(let i = 0; i < posts.length; i++){
        bodyPost.innerHTML += `
        <div class="post${users[i].id}">
            <a class="postHeading" href="http://127.0.0.1:5500/view.html?viewPost=${posts[i].id}">Title: ${posts[i].title}</a>
            <p class="postText">Post: ${`${posts[i].body.slice(0,20)}...`}</p>
            <p class="postAuthor">${users.find((item) => item.id === posts[i].userId).name}</p>
            <button class="btnEdit"><a href="http://127.0.0.1:5500/edit.html?viewPost=${posts[i].id}">Edit</a></button>
        </div>
        `  
    }
}

export function createPost(posts, users){
    if(localStorage.length !== 0){
        let obj = getPostsFromLocalStorage();
        if(posts.id === obj.id){
            posts.title = obj.title;
            posts.body = obj.body;
        }
    }
    let bodyPost = document.querySelector('.bodyPost');
    bodyPost.innerHTML += `
        <div class="post${users.id}">
            <p class="postHeading">Title: ${posts.title}</p>
            <p class="postText">Post: ${`${posts.body}...`}</p>
            <p class="postAuthor">${users.find((item) => item.id === posts.userId).name}</p>
            <button class="btnEdit">Edit</button>
            <button class="btnDelete ${posts.id}">X</button>
        </div>
        `  
    deletePost(posts.id);
}

export function getPostsFromLocalStorage(){
    for(let i=0; i<localStorage.length; i++) {
        let key = localStorage.key(i);

        let value = localStorage.getItem(key);
        let obj = JSON.parse(value);
        return obj
    }
}

// function getPostFromLocalStorage(id){

// }

export function showPostForEdit(posts){
    if(localStorage.length !== 0){
        let obj = getPostsFromLocalStorage();
        if(posts.id === obj.id){
            posts.title = obj.title;
            posts.body = obj.body;
        }
    }

    let title = document.querySelector('.titleEdit');
    let body = document.querySelector('.textEdit');
    title.textContent = posts.title;
    body.textContent = posts.body;
}

export async function setPostsToLocalStorage(id){
    let title = document.querySelector('.titleEdit');
    let body = document.querySelector('.textEdit');
    
    let postTitle = title.value;
    let postBody = body.value;

    let obj = {
        'id': id,
        'title': postTitle,
        'body': postBody,
    }

    localStorage.setItem(`obj${id}`, JSON.stringify(obj));
}

function getUsersFromLocalStorage(){

}

function setUsersToLoaclStorage(){

}

// function renderPostView(){

// }

// function renderPostEdit(){

// }