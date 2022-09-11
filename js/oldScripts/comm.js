
let posts = [];
let users = [];
let usersId = [];
let baseUrl = url();

function url(){
    let myUrl = window.location.href;
    let url = myUrl.replace('file:///Users/admin/Desktop/VSCode/my%20blog', '..')
    return url;
}


const urlPosts = 'https://jsonplaceholder.typicode.com/posts';
const urlUsers = 'https://jsonplaceholder.typicode.com/users';

async function requestNewFetch(url){
    const response = await fetch(`${url}?_limit=10`);
    const result = await response.json();
    return result;
}

let start = 0;
let end = 2;
    

async function requestFetch(url){
    const response = await fetch(`${url}?_limit=10`);
    const result = await response.json();
    return result;
}

Promise.all([
        new Promise((resolve, reject) => {
            posts = requestFetch(urlPosts)
            resolve(posts)
        }),
        new Promise((resolve, reject) => {
            users = requestFetch(urlUsers)
            resolve(users)
        })
]).then(([posts, users]) => {
    renderMyPost(posts, users);
    paginationNext(posts,users);
    paginationPrev(posts, users);
})



function paginationNext(posts, users){
    let bodyPost = document.querySelector('.bodyPost');
    let btn = document.querySelector('.btnPagesAll')
    let btnNext = document.querySelector('.btnPageNext')
    let btnPrev = document.querySelector('.btnPagePrev');
    
    btnNext.addEventListener('click', () => {
        if(end >= users.length){
            bodyPost.innerHTML = '';
            bodyPost.innerHTML = `Posts ended`;
            start = 10;
            end = 12;
            window.location.hash = `?id=end`;
        }
        else{
            start += 2;
            end += 2;
            bodyPost.innerHTML = '';
            for(let i = start; i < end; i++){
                bodyPost.innerHTML += `
                <div class="post${users[i].id}">
                    <a class="postHeading" href="file:///Users/admin/Desktop/VSCode/my%20blog/html/indexOnePost.html?id=${users[i].id}">Title: ${posts[i].title}</a>
                    <p class="postText">Post: ${`${posts[i].body.slice(0,20)}...`}</p>
                    <p class="postAuthor">${users[i].name}</p>
                    <button class="btnEdit">Edit</button>
                </div>
                `
            }
           window.location.search = `id=${start+1}&id=${end}`;
        }
    })
}
    
function paginationPrev(posts, users){
    let bodyPost = document.querySelector('.bodyPost');
    let btnNext = document.querySelector('.btnPageNext')
    let btnPrev = document.querySelector('.btnPagePrev');

    btnPrev.addEventListener('click', () => {
        if(start === 0){
            bodyPost.innerHTML = '';
            renderMyPost(posts, users);
        }
        else{
            start -= 2;
            end -= 2;
            window.location.hash = `?id=${start+1}&id=${end}`;
            bodyPost.innerHTML = '';
            for(let i = start; i < end; i++){
                bodyPost.innerHTML += `
                <div class="post${users[i].id}">
                    <a class="postHeading" href="file:///Users/admin/Desktop/VSCode/my%20blog/html/indexOnePost.html?id=${users[i].id}">Title: ${posts[i].title}</a>
                    <p class="postText">Post: ${`${posts[i].body.slice(0,20)}...`}</p>
                    <p class="postAuthor">${users[i].name}</p>
                    <button class="btnEdit">Edit</button>
                </div>
                `
            }
        }     
    })
} 


async function renderMyPost(posts, users){
    let bodyPost = document.querySelector('.bodyPost');
    let btn = document.querySelector('.btnPagesAll')

    for(let i = 0; i < 2; i++){
        bodyPost.innerHTML += `
        <div class="post${users[i].id}">
            <a class="postHeading" href="file:///Users/admin/Desktop/VSCode/my%20blog/html/indexOnePost.html?id=${users[i].id}">Title: ${posts[i].title}</a>
            <p class="postText">Post: ${`${posts[i].body.slice(0,20)}...`}</p>
            <p class="postAuthor">${users[i].name}</p>
            <button class="btnEdit">Edit</button>
        </div>
        `  
    }
    let url = new URL('file:///Users/admin/Desktop/VSCode/my%20blog/html/index.html')
    // url.searchParams.set('id', 1);
    // window.location.href = url;
    hideText(posts);
}




function hideText(obj){
    let items = document.querySelectorAll('.postText')
    let flag = true;
    for(let i = 0; i < items.length; i++){
        items[i].addEventListener('click', () => {
        if(flag){
            items[i].textContent = `Post: ${obj[i].body.slice(0,200)}`
            flag = false
        }
        else{
            items[i].textContent = `Post: ${obj[i].body.slice(0,20)}...`
            flag = true;
        }
    })    
  }
    
}

// btn.innerHTML = `
        //     <button class="btnPagePrev"><a href="file:///Users/admin/Desktop/VSCode/my%20blog/html/indexPagination.html?id=${i}">Previous</a></button>
        //     <button class="btnPageNext"><a href="file:///Users/admin/Desktop/VSCode/my%20blog/html/indexPagination.html?id=${i + 1}">Next</a></button>
        // `


