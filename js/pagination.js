import {getParamFromUrl} from './getFunction.js';
import {parsePostsLength} from './api.js';
import {renderPosts} from './renderCreateDeleteFunction.js';
import {setUrlParamForPage} from './setFunction.js';
import {setValueSelectBox} from './selectBox.js';

const mainPageUrl = 'http://127.0.0.1:5500';


export async function pagination(){
    let postsLength = await parsePostsLength();
    let maxCount = postsLength.length / getParamFromUrl()[1];
    
    createPaginationBtn('.pagination');
    setBtnValueNext('.btnPage', getParamFromUrl()[0], maxCount);


    renderPosts(getParamFromUrl()[0], getParamFromUrl()[1]);
    setValueSelectBox();
    
    let btnNext = document.querySelector('.btnPageNext');
    btnNext.addEventListener('click', () => {
        if(getParamFromUrl()[0] >= maxCount){
            alert('POST ENDED!');
        }
        else{
            setUrlParamForPage(mainPageUrl, getParamFromUrl()[0] + 1, getParamFromUrl()[1]);
            removeClassActive(document.querySelectorAll('.btnPage'));
            if(getParamFromUrl()[0]>=4 && getParamFromUrl()[0]<=maxCount){
                setBtnValueNext('.btnPage', getParamFromUrl()[0] - 2, maxCount);
            }
            addClassActiveOnClick(document.querySelectorAll('.btnPage'), 'btnActive');
            renderPosts(getParamFromUrl()[0], getParamFromUrl()[1]);
        }
        
    })

    let btnPrev = document.querySelector('.btnPagePrev');
    btnPrev.addEventListener('click', () => {
        setUrlParamForPage(mainPageUrl, getParamFromUrl()[0] - 1, getParamFromUrl()[1]);
        removeClassActive(document.querySelectorAll('.btnPage'));
        if(getParamFromUrl()[0] < 3 || getParamFromUrl()[0] > 7){
            addClassActiveOnClick(document.querySelectorAll('.btnPage'), 'btnActive');
            renderPosts(getParamFromUrl()[0], getParamFromUrl()[1]);
            return;
        }
        else{
            setBtnValuePrev('.btnPage', getParamFromUrl()[0]);
            addClassActiveOnClick(document.querySelectorAll('.btnPage'), 'btnActive');
            renderPosts(getParamFromUrl()[0], getParamFromUrl()[1]);
        }
    })
    let btnPage = document.querySelectorAll('.btnPage');
    btnPage.forEach((item) => {
        item.addEventListener('click', () => {
            removeClassActive(document.querySelectorAll('.btnPage'));
            setUrlParamForPage(mainPageUrl, item.innerHTML);
            renderPosts(item.innerHTML, getParamFromUrl()[1]);
            addClassActiveOnClick(document.querySelectorAll('.btnPage'), 'btnActive');
        })
    })
}

export function removeClassActive(btn){
    btn.forEach((item) => item.classList.remove('btnActive'))
}

export function addClassActiveOnClick(btn, activeClass){
    btn.forEach((item) => {
        if(item.innerHTML === String(getParamFromUrl()[0])){
            item.classList.add(activeClass);
        }
    })
}

export function createElemInHtml(elem, className){
    let div = document.createElement(elem);    
    div.className = className;
    document.body.childNodes[1].childNodes[3].after(div);
}



function createPaginationBtn(elem, count = null){
    let paginationContainer = document.querySelector(elem);
    paginationContainer.innerHTML = '';
    paginationContainer.innerHTML = `
    <button class="btnPagePrev "><</button>
    <button class="btnPage btnActive" data-page="1"></button>
    <button class="btnPage"></button>
    <button class="btnPage"></button>
    <button class="btnPage"></button>
    <button class="btnPage"></button>
    <button class="btnPageNext">></button>
    `;
}

// todo: data атрибут
function setBtnValueNext(elem, count, maxCount){
    let btnPage = document.querySelectorAll(elem);
    let value = count;
    if(count >= maxCount - 3){
        return;
    }
    else{
        for(let i = 0; i < btnPage.length; i++){
        
            btnPage[i].innerHTML = value;
            value++;
           
        }
    }
    
}

function setBtnValuePrev(elem, count){
    let btnPage = document.querySelectorAll(elem);
    let value = count- 2;
    if(count <= 3 && count >=12){
        return;
    }
    else{
        for(let i = 0; i < btnPage.length; i++){
            
            btnPage[i].innerHTML = value;
            value++;
           
        }
    }
    
}






















// function setValueBtnPageNext(count){
//     let elemAll = document.querySelectorAll('.btnPage');
//     let valueBtn = count;
//     if(count >= getParamFromUrl()[1] - 3) return;
//     for(let i = 0; i < elemAll.length; i++){
//         elemAll[i].innerHTML = valueBtn;
//         valueBtn++;
//     }
// }

// function describeNextBtn(count){
//     removeClassActive(document.querySelectorAll('.btnPage'));
//     setUrlParamForPage(mainPageUrl, count + 1);
//     if(count >= 3){
//         setValueBtnPageNext(count);
//     }
//     if(count >= 10){
//         alert('POST ENDED');
//         window.history.go(-1);
//     }
//     addClassActiveOnClick(document.querySelectorAll('.btnPage'), 'btnActive');
// }

// function setValueBtnPagePrev(count){
//     let elemAll = document.querySelectorAll('.btnPage');
//     let valueBtn = count;
//     for(let i = 1; i < elemAll.length; i++){
//         elemAll[i].innerHTML = valueBtn;
//         valueBtn--;
//     }
// }

// function describePrevBtn(count){
//     if(count >= 3){
//         setUrlParamForPage(mainPageUrl, count - 1);
//     }
//     setValueBtnPagePrev(count);
// }

