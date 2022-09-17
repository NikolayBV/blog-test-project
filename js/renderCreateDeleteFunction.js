import {parseRecievedPostsAndUsers, parseRecievedPostAndUser, parseRecievedPost, updatePost, deletePost, createPost} from './api.js';
import {getIdFromHash, getValueFromPost} from './getFunction.js';
import {setValueToLocalStorage} from './setFunction.js';
import {checkPostsInLocalStorage, checkOnePostInLocalStorage, checkOnePostInLocalStorageForDelete} from './checkFunction.js';

export function renderPosts(page = 1, amount = 10){
    parseRecievedPostsAndUsers(page, amount)
    .then(([posts, users]) => {
        checkPostsInLocalStorage(posts);
        createPosts(posts, users);
    })
}

export function renderPostView(){
    parseRecievedPostAndUser(getIdFromHash())
    .then(([post, user]) => {
        checkOnePostInLocalStorage(post);
        createOnePosts(post, user);
    })
}

export function renderEditPostForm(){
    let body = document.querySelector('.bodyPost');
    parseRecievedPost(getIdFromHash())
    .then((post) => {
        checkOnePostInLocalStorage(post);
        createPostEditForm(post);
        let btnSave = document.querySelector('.btnSave');
        btnSave.addEventListener('click', () => {
            updatePost(getIdFromHash(), getValueFromPost()[0], getValueFromPost()[1])
            .then((res) => {
                if(res === 200){
                    setValueToLocalStorage(getValueFromPost()[0], getValueFromPost()[1], getIdFromHash());
                    body.innerHTML = 'OK';
                }
                else{
                    body.innerHTML = 'Error';
                }
            })
        })
        let btnDelete = document.querySelector('.btnDelete');
        btnDelete.addEventListener('click', () => {
            deletePost(getIdFromHash())
            .then((res) => {
                if(res === 200){
                    setValueToLocalStorage(getValueFromPost()[0], getValueFromPost()[1], getIdFromHash());
                    checkOnePostInLocalStorageForDelete(post);
                    body.innerHTML = 'OK';
                }else{
                    body.innerHTML = 'Error';
                }
            })
        })
    })
}

export function renderCreatePostForm(){
    let count = 101;
    createPostForm();
    let bodyPost = document.querySelector('.bodyPost');
    let btnSave = document.querySelector('.btnSave');
    btnSave.addEventListener('click', () => {
        createPost(count, getValueFromPost()[0], getValueFromPost()[1])
        .then((res) => {
            if(res === 201){
                count += 1;
                bodyPost.innerHTML = 'Created';
            }
        })
    })
}

export function createPostForm(){
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
            <div class="btnForEditPost">
                <button type="submit" class="btnSave">Save</button>
                <button type="submit" class="btnDelete">Delete</button>
            </div>
        </div>
    `
}


function deletePostFromLocalStoradge(id){

}































