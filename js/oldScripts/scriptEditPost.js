// let urlId = function getId(){
//     let url = window.location.href;
//     let myUrl = new URL(url);
//     let id = myUrl.searchParams.get('id')
//     return parseInt(id) + 1;
// }

(function getText(){
    let textTitle = document.querySelector('.titleEdit');
    let textPost = document.querySelector('.textEdit');
    let btnSave = document.querySelector('.btnSave');
    btnSave.addEventListener('click', () => {
        let newPost = {
            title: textTitle.value,
            body: textPost.value,
        }
        // fetch("https://jsonplaceholder.typicode.com/posts", {
        //     method: "post",
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //     },

        //     body: JSON.stringify({
        //         "userId": 1,
        //         "id": urlId,
        //         "title": textTitle.value,
        //         "body": textPost.value,
        //     })
        // })
        localStorage.setItem('newPost', JSON.stringify(newPost));
        window.location.href = 'file:///Users/admin/Desktop/VSCode/my%20blog/html/index.html';
    })
})()





// тест поста вывожу (заголовок, тело), затем меняю и сохраняю в локалстор
// пушить в массив каждый измененный объект 
//сравнивать перед отрисовкой постов наличие в локолстор
//при первом запуке скрипта взять весь урл обрехать до index.html и сделать base url + название файла
//разобраться с импортом (реквайр)попробовать старый синтаксис