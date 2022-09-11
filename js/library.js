import {parseRecievedPostsAndUsers, parseRecievedPostAndUser, parseRecievedPost} from './api.js';

// todo сделать в одном цикле 
// разбить на две функции с 31-37 вынести в отдельную функцию

// renderPosts()
// renderPostView()
// renderEditPostForm()
// renderCreatePostForm()

export function setUrlParam(url, param){
    window.history.pushState({}, null, `${url}/${param}`)
}

export function getParamFromUrl(){
    let url = new URL(window.location.href);
    let paramPage = url.searchParams.get('page');
    let paramAmount = url.searchParams.get('amount');
    return [paramPage, paramAmount];
}


export function renderPosts(page, amount){
    parseRecievedPostsAndUsers(page, amount)
    .then(([posts, users]) => {
        createPosts(posts, users)
    })
}

export function getIdFromHash(){
    let hash = window.location.hash;
    let id = hash.split('').reduce((acc, cur) => {if(parseInt(cur)) acc += cur; return acc}, '');
    return id;
}

export function renderPostView(){
    parseRecievedPostAndUser(getIdFromHash())
    .then(([post, user]) => {
        createOnePosts(post, user)
    })
}

export function renderEditPostForm(){
    parseRecievedPost(getIdFromHash())
    .then((post) => {
        createPostEditForm(post)
    })
}

export function renderCreatePostForm(){
    let bodyPost = document.querySelector('.bodyPost');
    bodyPost.innerHTML = '';
    bodyPost.innerHTML = `
        <div class="postEdit">
            <h3 class="editHeading">Edit title</h3>
            <textarea action="" class="titleEdit"></textarea>
            <h3 class="editHeading">Edit text</h3>
            <textarea action="" class="textEdit" minlength="20" maxlength="200"></textarea>
            <button type="submit" class="btnSave">Save</button>
        </div>
    `
}

export function checkUrl(id){
    switch(window.location.hash) {
        case '': 
            renderPosts(getParamFromUrl()[0], getParamFromUrl()[1]);
            break;
        case `#vievPost${id()}`:
            renderPostView();
            break;
        case `#post/edit/${id()}`: 
            renderEditPostForm(); 
            break;
        case '#post/create':    
        renderCreatePostForm();
            break;
    }
}






















export function checkPostsInLocalStorage(posts){
    if(localStorage.length !== 0){
        posts.map((elem) => {
            let obj = getPostsFromLocalStorage();
            if(elem.id === obj.id){
                elem.title = obj.title;
                elem.body = obj.body;
            }
        })
    }
    
}

export function createPosts(posts, users){
    let bodyPost = document.querySelector('.bodyPost');
    bodyPost.innerHTML = '';
    for(let i = 0; i < posts.length; i++){
        bodyPost.innerHTML += `
        <div class="post${users[i].id}">
            <p class="postHeading" id=${posts[i].id}><a href="#vievPost${posts[i].id}">Title: ${posts[i].title}</a></p>
            <p class="postText" id=text${posts[i].id}>Post: ${posts[i].body.slice(0,20)}...</p>
            <p class="postAuthor" id=author${users.id}>${users.find((item) => item.id === posts[i].userId).name}</p>
            <button class="btnEdit" id=edit${posts[i].id}><a href="#post/edit/${posts[i].id}">Edit</a></button>
        </div>
        `  
    }
}


export function createOnePosts(post, user){
    let bodyPost = document.querySelector('.bodyPost');
    bodyPost.innerHTML = '';
        bodyPost.innerHTML += `
        <div class="post${user.id}">
            <p class="postHeading" id=${post.id}><a href="#vievPost${post.id}">Title: ${post.title}</a></p>
            <p class="postText" id=text${post.id}>Post: ${post.body}</p>
            <p class="postAuthor" id=author${user.id}>${user.name}</p>
            <button class="btnEdit" id=edit${post.id}><a href="#post/edit/${post.id}">Edit</a></button>
        </div>
        `  
}

export function createPostEditForm(post){
    let bodyPost = document.querySelector('.bodyPost');
    bodyPost.innerHTML = '';
    bodyPost.innerHTML = `
        <div class="postEdit">
            <h3 class="editHeading">Edit title</h3>
            <textarea action="" class="titleEdit">${post.title}</textarea>
            <h3 class="editHeading">Edit text</h3>
            <textarea action="" class="textEdit" minlength="20" maxlength="200">${post.body}</textarea>
            <button type="submit" class="btnSave">Save</button>
        </div>
    `
}



































// todo функция ничего не берет а записывает переданные параметры в локалсторадж
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