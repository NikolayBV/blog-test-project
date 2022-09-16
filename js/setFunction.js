import {postsAndUsersLength} from './api.js';

export function setUrlParam(url, param){
    window.history.pushState({}, null, `${url}/${param}`)
}

export function setUrlParamForPage(url, page = 1, amount = 10){
    window.history.pushState({}, null, `${url}/?page=${page}&amount=${amount}`);
}

export function setMaxLengthForBtn(btn, count = 10){
    postsAndUsersLength()
    .then(([posts, users]) => {
        btn.innerHTML = posts.length/count;
    })
}

export function setValueToLocalStorage(title, body, id){
    let obj = {id, title, body};
    localStorage.setItem(id, JSON.stringify(obj));
}
