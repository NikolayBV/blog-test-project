import {getUsers, getPost} from './api.js';
import {createPost} from './library.js';
//import {renderPost} from './index.js'

Promise.all([
    new Promise((resolve, reject) => {
        let posts = getPost();
        resolve(posts)
    }),
    new Promise((resolve, reject) => {
        let users = getUsers();
        resolve(users)
    })
]).then(([posts,users]) => {
    createPost(posts, users)
})