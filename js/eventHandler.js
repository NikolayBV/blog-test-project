import {} from './pagination.js';

export function firstLoadPage(url, page = 1, amount = 10){
    window.onload = () => {
        window.history.pushState({}, null, `${url}/?page=${page}&amount=${amount}`);
    }
}

