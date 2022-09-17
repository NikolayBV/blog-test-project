import {pagination} from './pagination.js';

export function firstLoadPage(url, btn){
    window.onload = () => {
        window.history.pushState({}, null, `${url}/?page=1&amount=10`);
        btn.classList.add('btnActive');
    }
    pagination()
}

