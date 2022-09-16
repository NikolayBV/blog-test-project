import {getIdFromHash, getParamFromUrl} from './getFunction.js';
import {renderPosts} from './renderAndCreateFunction.js';
import {firstLoadPage} from './eventHandler.js';
import {pagination} from './pagination.js';
import {checkUrl} from './checkFunction.js';
import {setUrlParamForPage, setMaxLengthForBtn} from './setFunction.js';

const mainPageUrl = 'http://127.0.0.1:5500';

let select = document.querySelector('.selectList');
let btnPage6 = document.querySelector('.btnPage6');
let btnPage2 = document.querySelector('.btnPage2');

setMaxLengthForBtn(btnPage6);
firstLoadPage(mainPageUrl, btnPage2);
renderPosts();

select.addEventListener('change', () => {
    if(select.value === 'five'){
        setUrlParamForPage(mainPageUrl, 1, 5);
        setMaxLengthForBtn(btnPage6, getParamFromUrl()[1]);
        renderPosts(getParamFromUrl()[0], getParamFromUrl()[1]);
        pagination(getParamFromUrl()[0], getParamFromUrl()[1]);
        
    }
    else if(select.value === 'two'){
        setUrlParamForPage(mainPageUrl, 1, 2);
        setMaxLengthForBtn(btnPage6, getParamFromUrl()[1]);
        renderPosts(getParamFromUrl()[0], getParamFromUrl()[1]);
        pagination(getParamFromUrl()[0], getParamFromUrl()[1]);
        
    }
    else if(select.value === 'ten'){
        setUrlParamForPage(mainPageUrl, 1, 10)
        setMaxLengthForBtn(btnPage6, getParamFromUrl()[1]);
        renderPosts(getParamFromUrl()[0], getParamFromUrl()[1]);
        pagination(getParamFromUrl()[0], getParamFromUrl()[1]);
        
    }
})

window.addEventListener('hashchange', () => checkUrl(getIdFromHash));







