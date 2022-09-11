import {updatePost, getPost} from './api.js';
import {setPostsToLocalStorage, showPostForEdit, getPostsFromLocalStorage} from './library.js';
// todo: 
(async function main(){
    const response = await getPost();
    // todo проверить статус код и обработать ошибку
    const posts = await response.json();
    showPostForEdit(posts);
    setEventHandlers();
})();   

function setEventHandlers(){
    const titleInputElement = '';
    const bodyInputElement = '';
    const btnSaveElement = document.querySelector('.btnSave');
    btnSaveElement.addEventListener('click', async () => {
        //todo собрать значение из формы
        const response = await updatePost(id, userID, title, body);
        // todo: - выполнять setPostsToLocalStorage(res) после успешного updatePost()
        setPostsToLocalStorage(res);
    });
}


