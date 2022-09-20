import {postsAndUsersLength} from './api.js';

export function setUrlParam(url, param){
    window.history.pushState({}, null, `${url}/${param}`)
}

export function setUrlParamForPage(url, page = 1, amount = 10){
    if(page <= 0){
        return
    }
    else{
        window.history.pushState({}, null, `${url}/?page=${page}&amount=${amount}`);
    }
}

export function setValueToLocalStorage(title, body, id){
    let obj = {id, title, body};
    localStorage.setItem(id, JSON.stringify(obj));
}
