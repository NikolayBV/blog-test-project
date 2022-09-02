
let posts = [];
let users = [];
let usersId = [];


const requestURL = 'https://jsonplaceholder.typicode.com/posts';
const requestName = 'https://jsonplaceholder.typicode.com/users';

function renderPost(posts, users, start = 0, end = 2){
    let bodyPost = document.querySelector('.bodyPost');
    posts = posts.slice(start, end)
    for(key in posts){
        bodyPost.innerHTML += `
            <div class="post1">
                <h3 class="postHeading">Title: ${posts[key].title}</h3>
                <p class="postText">Post: ${`${posts[key].body.slice(0,20)}...`}</p>
                <p class="postAuthor">${users.find((user) => 
                    user.id === posts[key].id).name
                }</p>
            </div>
        `
    }

}

function renderMyPost(posts, users, start=0, end){
    let bodyPost = document.querySelector('.bodyPost');
    for(let i = start; i < end; i++){
        bodyPost.innerHTML += `
        <div class="post1">
            <h3 class="postHeading">Title: ${posts[i].title}</h3>
            <p class="postText">Post: ${`${posts[i].body.slice(0,20)}...`}</p>
            <p class="postAuthor">${users[i].name}</p>
        </div>
        `   
        usersId.push(users[i].id)
        
    }
}

function requestFetch(url){
    const response = fetch(url)
    .then((res) => res.json())
    return response;
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

function showPost(){
    let postTitle = document.querySelectorAll('.postHeading')
    for(let i = 0; i < postTitle.length; i++){
        postTitle[i].addEventListener('click', () => {
            let url = new URL('file:///Users/admin/Desktop/VSCode/my%20blog/html/indexOnePost.html');
            url.searchParams.set('id', i);
            window.location.href = url;
        })
    }
}


Promise.all([
    new Promise((resolve, reject) => {
        posts = requestFetch(requestURL)
        resolve(posts)
    }),
    new Promise((resolve, reject) => {
        users = requestFetch(requestName)
        resolve(users)
    })
])
.then((res) => {
    renderPost(res[0], res[1]);
    hideText(res[0]);
}).then(() => {
    showPost()
}).then(() => {
    pagination();
})


async function pagination(){
    let urlPost = await requestFetch(requestURL);
    let urlUsers = await requestFetch(requestName);

    let btnPage = document.querySelectorAll('.btnPage');
    let bodyPost = document.querySelector('.bodyPost');
    

    function postID(){
        let postHead = document.querySelectorAll('.postHeading')    
        for(let i = 0; i < postHead.length; i++){
            postHead[i].addEventListener('click', ()=> {
                let url = new URL('file:///Users/admin/Desktop/VSCode/my%20blog/html/indexOnePost.html');
                url.searchParams.set('id', usersId[i] - 1);
                window.location.href = url;
            })
        }
    }

    function hideMyText(obj){
        let items = document.querySelectorAll('.postText')
        let flag = true;
        for(let i = 0; i < items.length; i++){
            items[i].addEventListener('click', () => {
            if(flag){
                items[i].textContent = `Post: ${obj[usersId[i]-1].body.slice(0,200)}`
                flag = false
            }
            else{
                items[i].textContent = `Post: ${obj[usersId[i]-1].body.slice(0,20)}...`
                flag = true;
            }
        })    
      } 
    }
    
    (function postPagination(){
        for(let i = 0; i < 5; i++){
            btnPage[i].addEventListener('click', () => {
                bodyPost.innerHTML = '';
                if(btnPage[i].innerHTML === '1'){
                    usersId = [];
                    renderMyPost(urlPost, urlUsers, 0, 2)
                    postID()
                    hideMyText(urlPost)
                } 
                if(btnPage[i].innerHTML === '2'){
                    usersId = [];
                    renderMyPost(urlPost, urlUsers, 2, 4)
                    postID()
                    hideMyText(urlPost)
                } 
                if(btnPage[i].innerHTML === '3'){
                    usersId = [];
                    renderMyPost(urlPost, urlUsers, 4, 6)
                    postID()
                    hideMyText(urlPost)
                } 
                if(btnPage[i].innerHTML === '4'){
                    usersId = [];
                    renderMyPost(urlPost, urlUsers, 6, 8)
                    postID()
                    hideMyText(urlPost)
                }
                if(btnPage[i].innerHTML === '5'){
                    usersId = [];
                    renderMyPost(urlPost, urlUsers, 8, 10)
                    postID()
                    hideMyText(urlPost)
                }
            })
        }
    })()
}


    

















