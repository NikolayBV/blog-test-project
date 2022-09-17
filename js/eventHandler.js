import {pagination} from './pagination.js';
import {getParamFromUrl} from './getFunction.js';
import {parseRecievedPosts, parseRecievedUsers,postsAndUsersLength} from './api.js';



export function firstLoadPage(url, btn){
    window.onload = () => {
        window.history.pushState({}, null, `${url}/?page=1&amount=10`);
        btn.classList.add('btnActive');
    }
    pagination()
}

