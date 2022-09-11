
let posts = [];
let users = [];

let count = 3;

const urlPosts = 'https://jsonplaceholder.typicode.com/posts';
const urlUsers = 'https://jsonplaceholder.typicode.com/users';

let baseUrl = url();

function url(){
    let myUrl = window.location.href;
    let url = myUrl.replace('file:///Users/admin/Desktop/VSCode/my%20blog', '..')
    return url;
}
function getId(){
    let url = window.location.href;
    let myUrl = new URL(url);
    let id = myUrl.searchParams.get('id')
    return parseInt(id);
}
async function requestFetch(url, id, id2){
    if(id && id2){
        const response = await fetch(`${url}?id=${id}&id=${id2}`);
        const result = await response.json();
        return result;
    }
    else{
        const response = await fetch(`${url}?id=${1}&id=${2}`);
        const result = await response.json();
        return result;
    }
}

(function renderMyPost(){
    history.pushState({}, null, `file:///Users/admin/Desktop/VSCode/my%20blog/html/index.html?id=1&id=2`);
    let id = getId();
    let id2 = id + 1;

    Promise.all([
        new Promise((resolve, reject) => {
            posts = requestFetch(urlPosts, id, id2)
            resolve(posts)
        }),
        new Promise((resolve, reject) => {
            users = requestFetch(urlUsers, id, id2)
            resolve(users)
        })
    ]).then(([posts, users]) => {
        renderPost(posts, users);
        paginationNext();
        paginationPrev();
    })
})()




function paginationNext(){
    let bodyPost = document.querySelector('.bodyPost');
    let btnNext = document.querySelector('.btnPageNext');
    btnNext.addEventListener('click', () => {
        if(count >= 10){
            bodyPost.innerHTML = `Posts ended!`;
            history.pushState({}, null, `file:///Users/admin/Desktop/VSCode/my%20blog/html/index.html?id=Posts ended`);
        }
        else{
            bodyPost.innerHTML = '';
        history.pushState({}, null, `file:///Users/admin/Desktop/VSCode/my%20blog/html/index.html?id=${count}&id=${count+1}`);
        id = getId();
        id2 = id + 1;
        Promise.all([
            new Promise((resolve, reject) => {
                posts = requestFetch(urlPosts, id, id2)
                resolve(posts)
            }),
            new Promise((resolve, reject) => {
                users = requestFetch(urlUsers, id, id2)
                resolve(users)
            })
        ]).then(([posts, users]) => {
            renderPost(posts, users);
            count +=2;
        })
        }
    })
}

function paginationPrev(){
    let bodyPost = document.querySelector('.bodyPost');
    let btnPrev = document.querySelector('.btnPagePrev');
    btnPrev.addEventListener('click', () => {
        if(count > 2){
            bodyPost.innerHTML = '';
            history.pushState({}, null, `file:///Users/admin/Desktop/VSCode/my%20blog/html/index.html?id=${count-2}&id=${count-1}`);
            id = getId();
            id2 = id + 1;
            Promise.all([
                new Promise((resolve, reject) => {
                    posts = requestFetch(urlPosts, id, id2)
                    resolve(posts)
                }),
                new Promise((resolve, reject) => {
                    users = requestFetch(urlUsers, id, id2)
                    resolve(users)
                })
            ]).then(([posts, users]) => {
                renderPost(posts, users);
                count -=2;
            })
            
        }
        else{
            bodyPost.innerHTML = `Posts ended!`;
            history.pushState({}, null, `file:///Users/admin/Desktop/VSCode/my%20blog/html/index.html?id=Posts ended`);
        }
    
    })
}


async function renderPost(posts, users){
    let bodyPost = document.querySelector('.bodyPost');
        let btn = document.querySelector('.btnPagesAll');
        for(let i = 0; i < 2; i++){
            bodyPost.innerHTML += `
            <div class="post${users[i].id}">
                <a class="postHeading" href="file:///Users/admin/Desktop/VSCode/my%20blog/html/indexOnePost.html?id=${users[i].id}">Title: ${posts[i].title}</a>
                <p class="postText">Post: ${`${posts[i].body.slice(0,20)}...`}</p>
                <p class="postAuthor">${users[i].name}</p>
                <button class="btnEdit">Edit</button>
            </div>
            `  
            // btn.innerHTML = `
            //      <button class="btnPagePrev"><a href="file:///Users/admin/Desktop/VSCode/my%20blog/html/index.html">Previous</a></button>
            //      <button class="btnPageNext"><a href="file:///Users/admin/Desktop/VSCode/my%20blog/html/index.html?id=${3}&id=${4}">Next</a></button>
            //  ` 
        }
}









//в урл page и amount
//событие на загрузку сраницы
//selectbox - выпадающий список (2, 5, 10)
// url только первый запуск

//первый з

//сделать роутинг












// btn.innerHTML = `
        //     <button class="btnPagePrev"><a href="file:///Users/admin/Desktop/VSCode/my%20blog/html/indexPagination.html?id=${i}">Previous</a></button>
        //     <button class="btnPageNext"><a href="file:///Users/admin/Desktop/VSCode/my%20blog/html/indexPagination.html?id=${i + 1}">Next</a></button>
        // ` */
















