import {getIdFromHash, getParamFromUrl} from './getFunction.js';
import {renderPosts} from './renderCreateDeleteFunction.js';
import {firstLoadPage} from './eventHandler.js';
import {pagination, createElemInHtml} from './pagination.js';
import {checkUrl} from './checkFunction.js';
import {setValueSelectBox} from './selectBox.js';
import '../css/normalize.css';
import '../css/style.css';

const mainPageUrl = 'http://127.0.0.1:61215';


if(!getParamFromUrl()[0] && !getParamFromUrl()[1]){
    firstLoadPage(mainPageUrl);
}
else if(window.location.hash){
    firstLoadPage(mainPageUrl);
}
createElemInHtml('div', 'pagination');
setValueSelectBox();
pagination();
window.addEventListener('hashchange', () => checkUrl(getIdFromHash));


// todo: убрать лишние запросы везде
// todo: повешать событие на элементы
// todo: убрать пагинацию и селектор на  едит и вью
// todo: сделать кнопку назад из едит и вью на общий список
// todo: вместо ОК сделать анимацию на поля зеленого цвета, которая потухает и сообщение об ошибке
// todo: в  HTML оставить один DIV 



