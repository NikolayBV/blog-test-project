

export function getParamFromUrl(){
    let url = new URL(window.location.href);
    let paramPage = url.searchParams.get('page');
    let paramAmount = url.searchParams.get('amount');
    return [paramPage, paramAmount];
}

export function getIdFromHash(){
    let hash = window.location.hash;
    let id = hash.split('').reduce((acc, cur) => {if(parseInt(cur) || cur === '0') acc += cur; return acc}, '');
    return id;
}

export function getValueFromPost(){
    let title = document.querySelector('.titleEdit');
    let text = document.querySelector('.textEdit');

    let titleValue = title.value;
    let textValue = text.value;

    return [titleValue ,textValue];
}

export function getPostsFromLocalStorage(){
    for(let i=0; i<localStorage.length; i++) {
        let key = localStorage.key(i);

        let value = localStorage.getItem(key);
        let obj = JSON.parse(value);
        return obj
    }
}