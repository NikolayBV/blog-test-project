import {setPostsToLocalStorage} from './checkFunction.js';


const baseUrl = 'https://jsonplaceholder.typicode.com';

export function requestForPosts(page, amount){
    return fetch(`${baseUrl}/posts?_page=${page}&_limit=${amount}`);
}

export function requestForAllPosts(){
    return fetch(`${baseUrl}/posts`);
}

export function requestForAllUsers(){
    return fetch(`${baseUrl}/users`);
}

export function requestForOnePost(id){
    return fetch(`${baseUrl}/posts/${id}`);
}

export function requestForUser(id){
    return fetch(`${baseUrl}/users/${id}`);
}

export function requestForUsers(){
    return fetch(`${baseUrl}/users`);
}

export async function parseRecievedPosts(page, amount){
    let posts = await requestForPosts(page, amount);
    return posts.json();
}

export async function parseRecievedPost(id){
    let post = await requestForOnePost(id);
    return post.json();
}

export async function parseRecievedUsers(){
    let posts = await requestForUsers();
    return posts.json();
}

export async function parseRecievedUser(id){
    let posts = await requestForUser(id);
    return posts.json();
}

//todo: переписать таким образом все функции


export async function parseRecievedPostsAndUsers(page,amount){
    let posts = await parseRecievedPosts(page,amount);
    let users = await parseRecievedUsers();
    return [posts, users]
}

export async function parseRecievedPostAndUser(id){
    let post = await parseRecievedPost(id);
    let user = await parseRecievedUser(id);
    return [post, user];
}

export async function parsePostLength(){
    let posts = await requestForAllPosts();
    return posts.json();
}
 
export async function parseUsersLength(){
    let users= await requestForAllUsers();
    return users.json();
}

export async function postsAndUsersLength(){
    let posts = await parsePostLength();
    let users= await parseUsersLength();
    return ([posts, users]);
}



export async function updatePost(id, title, body){
    const response = await fetch(`${baseUrl}/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({id, title, body}),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
    const result = response.status;
    return result;
}























export function getPost(id){
    return fetch(`${baseUrl}/posts/${id}`);
}

// todo: SOLID!!! Чистые функции!!!
// export function updatePost(id, userId, title, body){
//     return fetch(`${baseUrl}/posts/${id}`, {
//         method: 'PUT',
//         body: JSON.stringify({ id,title, body, userId }),
//         headers: {
//           'Content-type': 'application/json; charset=UTF-8',
//         },
//     });
//       // todo: в обработчике события проверить статус код, если успешно, то 59 если нет, то console.warn() ошибку 
// }

// todo: почитать нэйминг
export function deletePost(id){
    // todo: удалить ненужные события 
    let btnDelete = document.querySelector('.btnDelete');
    // todo: в API только работа с сервером
    btnDelete.addEventListener('click', async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'DELETE',
        });
        const result = await response.json();
        if(result){
            let title = document.querySelector('.postHeading');
            let body = document.querySelector('.postText');
            let author = document.querySelector('.postAuthor')
            title.textContent = 'Post deleted';
            body.textContent = '';
            author.textContent = '';
        }
        for(let i=0; i<localStorage.length; i++) {
            let key = localStorage.key(i);
    
            let value = localStorage.getItem(key);
            let obj = JSON.parse(value);
            if(obj.id === id){
                localStorage.removeItem(key);
            }
        }
    })

}


