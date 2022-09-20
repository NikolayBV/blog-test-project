//import {setCountOfPost} from './setFunction.js';
import {renderPosts, renderCreatePostForm, renderEditPostForm, renderPostView} from './renderCreateDeleteFunction.js';
import {getParamFromUrl, getPostsFromLocalStorage} from './getFunction.js';
import {setValueToLocalStorage} from './setFunction.js';
import {pagination} from './pagination.js';

let select = document.querySelector('.selectList');

// todo сделать в одном цикле 
// разбить на две функции с 31-37 вынести в отдельную функцию

// renderPosts()
// renderPostView()
// renderEditPostForm()
// renderCreatePostForm()

export function checkUrl(id){
    //setCountOfPost();
    switch(window.location.hash) {
        case '': 
            pagination();
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
            for(let i=0; i<localStorage.length; i++) {
                let key = localStorage.key((i));
                let value = localStorage.getItem(key);
                let obj = JSON.parse(value);
                if(String(elem.id) === obj.id){
                    elem.title = obj.title;
                    elem.body = obj.body;
                }
            }
            
        })
    }
}

export function checkOnePostInLocalStorage(post){
    for(let i=0; i<localStorage.length; i++) {
        let key = localStorage.key((i));
        let value = localStorage.getItem(key);
        let obj = JSON.parse(value);
        if(String(post.id) === obj.id){
            post.title = obj.title;
            post.body = obj.body;
        }
    }
}

export function checkOnePostInLocalStorageForDelete(post){
    for(let i=0; i<localStorage.length; i++) {
        let key = localStorage.key((i));
        let value = localStorage.getItem(key);
        let obj = JSON.parse(value);
        if(String(post.id) === obj.id){
            localStorage.removeItem(key);
        }
    }
    // todo: добавить опцию DELETED  если пост удален и удаляю его и редирект на общий список постов
    // todo: добавить кнопку DELETE на общую страницу
}




