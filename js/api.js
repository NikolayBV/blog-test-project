// import {setPostsToLocalStorage} from './checkFunction.js';


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
    let user;
    if(id <=10){
        id = 1;
        user = await parseRecievedUser(id);
    }
    else if(id <=20){
        id = 2;
        user = await parseRecievedUser(id);
    }
    else if(id <=30){
        id = 3;
        user = await parseRecievedUser(id);
    }
    else if(id <=40){
        id = 4;
        user = await parseRecievedUser(id);
    }
    else if(id <=50){
        id = 5;
        user = await parseRecievedUser(id);
    }
    else if(id <=60){
        id = 6;
        user = await parseRecievedUser(id);
    }
    else if(id <=70){
        id = 7;
        user = await parseRecievedUser(id);
    }
    else if(id <=80){
        id = 8;
        user = await parseRecievedUser(id);
    }
    else if(id <=90){
        id = 9;
        user = await parseRecievedUser(id);
    }
    else if(id <=100){
        id = 10;
        user = await parseRecievedUser(id);
    }
    
    return [post, user];
}

export async function parsePostsLength(){
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
    return response.status;
}

export async function deletePost(id){
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: 'DELETE',
    });
    return response.status;
}

export async function createPost(id, title, body){
    const response = await fetch(`${baseUrl}/posts`, {
        method: 'POST',
        body: JSON.stringify({ id, title, body}),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })

    return response.status;
}
