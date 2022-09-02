/* const requestURL = 'https://jsonplaceholder.typicode.com/posts';
const requestName = 'https://jsonplaceholder.typicode.com/users';

function sendRequest(method, url){
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.open(method, url);
        
        //xhr.responseType = 'json';
        
        xhr.onload = () => {
            if(xhr.status >= 400){
                reject(xhr.response)
            }
            else{
                resolve(JSON.parse(xhr.response));
            }
        }
        
        xhr.onerror = () =>{
            reject(xhr.response)
        }
        
        xhr.send();
    })
}

// let post = document.querySelector('.post1Heading');
// let text = document.querySelector('.postText');
let author = document.querySelector('.postAuthor');
let bodyPost = document.querySelector('.bodyPost');
//let post1 = document.querySelector('.post1');

let posts = [];
let users = [];



sendRequest('GET', requestURL)
    .then((res) => {
           posts = res;
           console.log(posts)
        })
    .catch((err) => console.log(err))

// const posts = await sendRequest('GET', requestURL)
// const users = await sendRequest('GET', requestName)

sendRequest('GET', requestName)
    .then((res) => {
        users = res;
        console.log(users)
    })
    .catch((err) => console.log(err))

        



function renderPost(posts, users){
    //data = res.splice(0,10)
    for(key in posts){
        bodyPost.innerHTML += `
            <div class="post1">
                <h3 class="post1Heading"><a href="" class="">Title: ${posts[key].title}</a></h3>
                <p class="postText"><a href="" class="">Post: ${posts[key].body}</a></p>
                <p class="postAuthor">${users.find((user) => user.id === posts[key].id).name}</p>
            </div>
        `
    }
}

renderPost(posts, users); */



// (async function(){
//     for( let i = 0; i < text.length; i++ ){
//       text.innerHTML = text[i].innerHTML.slice(0,20) + '...';
//     }
//   })();