import {setPostsToLocalStorage} from './library.js';

export async function getPosts(start, limit){
    if(start <= 1){
        const urlPosts = 'https://jsonplaceholder.typicode.com/posts';
        const response = await fetch(`${urlPosts}?_limit=${limit}&_start=${start - 1}`);
        const result = await response.json();
        return result;
    }
    else{
        start = start * limit - limit;
        const urlPosts = 'https://jsonplaceholder.typicode.com/posts';
        const response = await fetch(`${urlPosts}?_limit=${limit}&_start=${start}`);
        const result = await response.json();
        return result;
    }
   
}

export async function getPost(){
    let url = window.location.href;
    let myUrl = new URL(url);
    let param = myUrl.searchParams.get('viewPost');
    const urlPosts = 'https://jsonplaceholder.typicode.com/posts';
    const response = await fetch(`${urlPosts}/${param}`);
    const result = await response.json();
    return result;
}

export async function getUsers(){
    const urlUsers = 'https://jsonplaceholder.typicode.com/users';
    const response = await fetch(urlUsers);
    const result = await response.json();
    return result;
}


export async function updatePost(id, userId){
    let title = document.querySelector('.titleEdit');
    let body = document.querySelector('.textEdit');
    
    let postTitle = title.value;
    let postBody = body.value;

    let obj = {
        'id': id,
        'title': postTitle,
        'body': postBody,
    }

    const urlPosts = 'https://jsonplaceholder.typicode.com/posts/';
    const response = await fetch(`${urlPosts}${id}`, {
        method: 'PUT',
        body: JSON.stringify({
          id: id,
          title: postTitle,
          body: postBody,
          userId: userId,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
    const result = await response.json();
    if(result){
        title.value = 'Post changed';
        body.value = '';
    }
}

export function deletePost(idPost){
    
    let btnDelete = document.querySelector('.btnDelete');

    btnDelete.addEventListener('click', async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}`, {
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
            if(obj.id === idPost){
                localStorage.removeItem(key);
            }
        }
    })

}


