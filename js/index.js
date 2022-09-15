import {getIdFromHash, renderPosts, renderPostView, renderEditPostForm, getParamFromUrl, renderCreatePostForm, checkUrl} from './library.js';
import {parseRecievedPost, parseRecievedPosts, parseRecievedPostsAndUsers, parseRecievedUsers, parseRecievedUser} from './api.js';
import {firstLoadPage, setUrlParamForPage, setMaxLengthForBtn, removeClassActive, addClassActiveOnClick} from './eventHandler.js';
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
let btnPage7 = document.querySelector('.btnPage7');
let btnAll = document.querySelectorAll('.btnAll');

setMaxLengthForBtn(btnPage6);
firstLoadPage(mainPageUrl, btnPage2);
renderPosts(page,amount);

window.addEventListener('hashchange', () => checkUrl(getIdFromHash));

(function pagination(){
    btnPage1.addEventListener('click', () => {
        if(page > 1){
            setUrlParamForPage(mainPageUrl, page - 1, amount);
            page -= 1
            renderPosts(getParamFromUrl()[0], getParamFromUrl()[1]);
            removeClassActive(btnAll);
            if(page >= 3){
                btnPage4.innerHTML = page;
                btnPage3.innerHTML = page - 1;
                btnPage2.innerHTML = page -2;
            }
            addClassActiveOnClick(btnAll, page, 'btnActive');
        }
        else if(page == btnPage6.innerHTML - 1){
            btnPage4.innerHTML = '...';
            btnPage5.innerHTML = btnPage6.innerHTML - 1;
            btnPage6.classList.add('btnActive');
        }
    });
    btnPage2.addEventListener('click', () => {
        let count = btnPage2.innerHTML;
        setUrlParamForPage(mainPageUrl, count);
        renderPosts(getParamFromUrl()[0], getParamFromUrl()[1]);
        removeClassActive(btnAll);
        if(!btnPage2.classList.contains('btnActive')){
            btnPage2.classList.add('btnActive');
            btnPage5.innerHTML = '...';
        }
    });
    btnPage3.addEventListener('click', () => {
        let count = btnPage3.innerHTML;
        setUrlParamForPage(mainPageUrl, count);
        renderPosts(getParamFromUrl()[0], getParamFromUrl()[1]);
        removeClassActive(btnAll);
        if(!btnPage3.classList.contains('btnActive')){
            btnPage3.classList.add('btnActive');
            btnPage5.innerHTML = '...';
        }
    });
    btnPage4.addEventListener('click', () => {
        let count = btnPage4.innerHTML;
        setUrlParamForPage(mainPageUrl, count);
        renderPosts(getParamFromUrl()[0], getParamFromUrl()[1]);
        removeClassActive(btnAll);
        if(!btnPage4.classList.contains('btnActive')){
            btnPage4.classList.add('btnActive');
        }
    });
    btnPage5.addEventListener('click', () => {
        // let count = btnPage5.innerHTML;
        // setUrlParamForPage(mainPageUrl, count);
        renderPosts(getParamFromUrl()[0], getParamFromUrl()[1]);
        removeClassActive(btnAll);
        if(!btnPage5.classList.contains('btnActive')){
            btnPage5.classList.add('btnActive');
        }
    });
    btnPage6.addEventListener('click', () => {
        let count = btnPage6.innerHTML;
        setUrlParamForPage(mainPageUrl, count);
        renderPosts(getParamFromUrl()[0], getParamFromUrl()[1]);
        removeClassActive(btnAll);
        if(!btnPage6.classList.contains('btnActive')){
            btnPage6.classList.add('btnActive');
        }
      
    });
    btnPage7.addEventListener('click', () => {
        if(page >= btnPage6.innerHTML){
            bodyPost.innerHTML = 'Posts ended';
        }
        else if(page == btnPage6.innerHTML - 1){
            btnPage4.innerHTML = '...';
            btnPage5.innerHTML = btnPage6.innerHTML - 1;
            btnPage6.classList.add('btnActive');
        }
        else{
            setUrlParamForPage(mainPageUrl, page + 1, amount);
            page += 1;
            renderPosts(getParamFromUrl()[0], getParamFromUrl()[1]);
            removeClassActive(btnAll);
            if(page > 3){
                btnPage4.innerHTML = page;
                btnPage3.innerHTML = page - 1;
                btnPage2.innerHTML = page -2;
            }
            addClassActiveOnClick(btnAll, page, 'btnActive');
        }
        
    });
})()

//checkUrl(getParamFromUrl()[0], getParamFromUrl()[1], getIdFromHeading())



