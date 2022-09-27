import {pagination, createElemInHtml} from './pagination.js';
import {setUrlParamForPage} from './setFunction.js';
import {getParamFromUrl} from './getFunction.js';

createElemInHtml('div', 'selectBox');

const mainPageUrl = 'http://127.0.0.1:61215';

export function createSelectBox(){
    let selectBox = document.querySelector('.selectBox');
    selectBox.innerHTML = `
        <select class="selectList">
            <option class="select1" value="ten">10</option>
            <option class="select2" value="five">5</option>
            <option class="select3" value="two">2</option>
        </select>
    `;
}

export function setValueSelectBox(){
    createSelectBox()
    let select = document.querySelector('.selectList');
    select.addEventListener('change', () => {
        if(select.value === 'five'){
            setUrlParamForPage(mainPageUrl, 1, 5);
            pagination();
        }
        else if(select.value === 'two'){
            setUrlParamForPage(mainPageUrl, 1, 2);
            pagination();
        }
        else if(select.value === 'ten'){
            setUrlParamForPage(mainPageUrl, 1, 10);
            pagination();
        }
    })
}