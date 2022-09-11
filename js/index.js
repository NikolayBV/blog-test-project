import {getIdFromHash, renderPosts, renderPostView, renderEditPostForm, getParamFromUrl, renderCreatePostForm, checkUrl} from './library.js';
import {parseRecievedPost, parseRecievedPosts, parseRecievedPostsAndUsers, parseRecievedUsers, parseRecievedUser} from './api.js';
import {firstLoadPage, setUrlParamForPage, setMaxLengthForBtn} from './eventHandler.js';
const mainPageUrl = 'http://127.0.0.1:5500';

let btnNext = document.querySelector('.btnPageNext');
let btnPrev = document.querySelector('.btnPagePrev');
let select = document.querySelector('.selectList');
let bodyPost = document.querySelector('.bodyPost');

let page = 1;
let amount = 10;

let btnPage1 = document.querySelector('.btnPage1');
let btnPage2 = document.querySelector('.btnPage2');
let btnPage3 = document.querySelector('.btnPage3');
let btnPage4 = document.querySelector('.btnPage4');
let btnPage5 = document.querySelector('.btnPage5');
let btnPage6 = document.querySelector('.btnPage6');
let btnAll = document.querySelectorAll('.btnAll');

setMaxLengthForBtn(btnPage5);

firstLoadPage(mainPageUrl);
renderPosts(page,amount);

window.addEventListener('hashchange', () => checkUrl(getIdFromHash));

(function pagination(){
    btnPage1.addEventListener('click', () => {
        
    });
    btnPage2.addEventListener('click', () => {
        setUrlParamForPage(mainPageUrl);
        if(!btnPage2.classList.contains('btnActive')){
            btnAll.classList.remove('btnActive');
            btnPage2.classList.add('btnActive');
        }
    });
    btnPage3.addEventListener('click', () => {
        setUrlParamForPage(mainPageUrl, 2)
        if(!btnPage3.classList.contains('btnActive')){
            btnAll.classList.remove('btnActive');
            btnPage3.classList.add('btnActive');
        }
    });
    btnPage4.addEventListener('click', () => {
        removeClassActive(btnAll);
        setUrlParamForPage(mainPageUrl, 3);
    });
    btnPage5.addEventListener('click', () => {
        removeClassActive(btnAll);
        setUrlParamForPage(mainPageUrl, btnPage5.innerHTML/amount);
      
    });
    btnPage6.addEventListener('click', () => {
    
    });
})()

//checkUrl(getParamFromUrl()[0], getParamFromUrl()[1], getIdFromHeading())



