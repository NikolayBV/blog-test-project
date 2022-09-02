let posts = [];
let users = [];

const requestURL = 'https://jsonplaceholder.typicode.com/posts/';
const requestName = 'https://jsonplaceholder.typicode.com/users/';

function getId(){
    let url = window.location.href;
    let myUrl = new URL(url);
    let id = myUrl.searchParams.get('id')
    return parseInt(id) + 1;
}

(async () => {
    let btn = document.querySelector('.btnBack')
    btn.addEventListener('click', () => {
        window.history.back()
        //window.location.href = 'file:///Users/admin/Desktop/VSCode/my%20blog/html/index.html';
    })
})()

let myId = getId();

function requestFetch(url, id){
    const response = fetch(`${url}${id}`)
    .then((res) => res.json())
    return response;
}

async function requestOnePost(file, id){
   let result = await requestFetch(file, id) 
   return result;
}

async function printOnePost(id){
    let myPost = await requestOnePost(requestURL,id);
    let authorPost = await requestOnePost(requestName, id)
    
    let bodyPost = document.querySelector('.bodyPost');
    bodyPost.innerHTML += `
        <div class="post1">
            <h3 class="post1Heading">Title: ${myPost.title}</h3>
            <p class="postText">Post: ${`${myPost.body}...`}</p>
            <p class="postAuthor">${authorPost.name}</p>
        </div>
    `
}


printOnePost(myId);



// при клике на заголовок, должно отправлять на страницу с этим постом

//file:///Users/admin/Desktop/VSCode/my%20blog/html/indexOnePost.html?id=2 
//на странице поста добавить ссылку назад

//сделать погинацию, в запросе отправлять дополнительные параметры
//записывать в GET параметры страницы (возврат на страницу только с которой ушел)

//добавить еще одну страницу "редактировать": инпут под заголовок, текстареа под весь текст и отправить POST запрос, а сам сохраняю его в локал сторадж и есл есть такой пост в локал сторадже то показывать его


//к каждому посту добавить кнопку редактировать на всех страницах
