import {getParamFromUrl} from './getFunction.js';
import {renderPosts} from './renderAndCreateFunction.js';
import {setUrlParamForPage} from './setFunction.js';

const mainPageUrl = 'http://127.0.0.1:5500';

let btnPage1 = document.querySelector('.btnPage1');
let btnPage2 = document.querySelector('.btnPage2');
let btnPage3 = document.querySelector('.btnPage3');
let btnPage4 = document.querySelector('.btnPage4');
let btnPage5 = document.querySelector('.btnPage5');
let btnPage6 = document.querySelector('.btnPage6');
let btnPage7 = document.querySelector('.btnPage7');
let btnAll = document.querySelectorAll('.btnAll');
let bodyPost = document.querySelector('.bodyPost');

export function removeClassActive(btn){
    btn.forEach((item) => item.classList.remove('btnActive'))
}

export function addClassActiveOnClick(btn, count,activeClass){
    btn.forEach((item) => {
        if(item.innerHTML === String(count)){
            item.classList.add(activeClass)
        }
    })
}



export function pagination(a = 1, b = 10){
    let page = +a;
    let amount = +b;

    btnPage1.addEventListener('click', () => {
        bodyPost.innerHTML = '';
        removeClassActive(btnAll);
        if(page > 1 && page <= btnPage6.innerHTML){
            setUrlParamForPage(mainPageUrl, page - 1, amount);
             page -= 1;
            if(page < 3 && page >= 1){
                renderPosts(getParamFromUrl()[0], getParamFromUrl()[1]);
                addClassActiveOnClick(btnAll, page, 'btnActive');
            }
            else if(page >= 3 && page <= btnPage6.innerHTML - 2){
                btnPage5.innerHTML = '...'
                btnPage4.innerHTML = page;
                btnPage3.innerHTML = page - 1;
                btnPage2.innerHTML = page - 2;
                renderPosts(getParamFromUrl()[0], getParamFromUrl()[1]);
                addClassActiveOnClick(btnAll, page, 'btnActive');
            }
            else if(page === btnPage6.innerHTML - 1){
                btnPage5.innerHTML = page;
                btnPage4.innerHTML = '...';
                renderPosts(getParamFromUrl()[0], getParamFromUrl()[1]);
                addClassActiveOnClick(btnAll, page, 'btnActive');
            }
            
        }
    });
    btnPage2.addEventListener('click', () => {
        bodyPost.innerHTML = '';
        let count = btnPage2.innerHTML;
        setUrlParamForPage(mainPageUrl, count, amount);
        renderPosts(getParamFromUrl()[0], getParamFromUrl()[1]);
        removeClassActive(btnAll);
        if(!btnPage2.classList.contains('btnActive')){
            btnPage2.classList.add('btnActive');
            btnPage5.innerHTML = '...';
        }
    });
    btnPage3.addEventListener('click', () => {
        bodyPost.innerHTML = '';
        let count = btnPage3.innerHTML;
        setUrlParamForPage(mainPageUrl, count, amount);
        renderPosts(getParamFromUrl()[0], getParamFromUrl()[1]);
        removeClassActive(btnAll);
        if(!btnPage3.classList.contains('btnActive')){
            btnPage3.classList.add('btnActive');
            btnPage5.innerHTML = '...';
        }
    });
    btnPage4.addEventListener('click', () => {
        bodyPost.innerHTML = '';
        if(btnPage4.innerHTML !== '...'){
            let count = btnPage4.innerHTML;
            setUrlParamForPage(mainPageUrl, count, amount);
            renderPosts(getParamFromUrl()[0], getParamFromUrl()[1]);
            removeClassActive(btnAll);
            if(!btnPage4.classList.contains('btnActive')){
                btnPage4.classList.add('btnActive');
            }
        }
    });
    btnPage5.addEventListener('click', () => {
        bodyPost.innerHTML = '';
        if(btnPage5.innerHTML !== '...'){
            let count = btnPage5.innerHTML;
            setUrlParamForPage(mainPageUrl, count, amount);
            renderPosts(getParamFromUrl()[0], getParamFromUrl()[1]);
            removeClassActive(btnAll);
            if(!btnPage5.classList.contains('btnActive')){
                btnPage5.classList.add('btnActive');
            }
        }
    });
    btnPage6.addEventListener('click', () => {
        bodyPost.innerHTML = '';
        let count = btnPage6.innerHTML;
        setUrlParamForPage(mainPageUrl, count, amount);
        renderPosts(getParamFromUrl()[0], getParamFromUrl()[1]);
        removeClassActive(btnAll);
        if(!btnPage6.classList.contains('btnActive')){
            btnPage6.classList.add('btnActive');
        }
      
    });
    btnPage7.addEventListener('click', () => {
        bodyPost.innerHTML = '';
        setUrlParamForPage(mainPageUrl, page + 1, amount);
        page += 1;
        renderPosts(getParamFromUrl()[0], getParamFromUrl()[1]);
        removeClassActive(btnAll);
        addClassActiveOnClick(btnAll, page, 'btnActive');
        if(page > 3 && page < +btnPage6.innerHTML - 1){
            btnPage4.innerHTML = page;
            btnPage3.innerHTML = page - 1;
            btnPage2.innerHTML = page - 2;
            addClassActiveOnClick(btnAll, page, 'btnActive');
        }
        else if(page === +btnPage6.innerHTML - 1){
            btnPage4.innerHTML = '...';
            btnPage5.innerHTML = page;
            addClassActiveOnClick(btnAll, page, 'btnActive');
        }
        else if(page === btnPage6.innerHTML){
            btnPage4.innerHTML = '...';
            btnPage5.innerHTML = page - 1;
            addClassActiveOnClick(btnAll, page, 'btnActive');
        }
            
    });
}