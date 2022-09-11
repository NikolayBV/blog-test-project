import {updatePost, getPost} from './api.js';
import {setPostsToLocalStorage, showPostForEdit, getPostsFromLocalStorage} from './library.js';

(function getPostForEdit(){
    return new Promise((resolve, reject) => {
        let posts = getPost();
        resolve(posts)
    })
})().then((posts) => {
    showPostForEdit(posts);
    let res = posts.id
    let userId = posts.userID
    let save = document.querySelector('.btnSave');
    save.addEventListener('click', async () => {
        setPostsToLocalStorage(res);
        updatePost(res, userId);
    });
})
        


