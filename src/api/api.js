import React from "react";
import axios from "axios";

export async function getPosts(limit = null, page = null){
    if(!limit && !page){
        const response = await axios.get('http://localhost:5000/posts');
        return response.data;
    }
    else{
        const response = await axios.get('http://localhost:5000/posts', {
            params: {
                limit: limit,
                page: page,
            }
        });
        return {data: response.data, count: response.headers['X-total-count']};
    }
}

export async function getUsers(){
    const response = await axios.get('http://localhost:5000/users');
    return response.data;
}

export async function getPostById(id){
    const response = await axios.get(`http://localhost:5000/posts/${id}`);
    return response.data;
}

export async function getAllPosts(){
    const response = await axios.get('http://localhost:5000/posts/all');
    return response.data;
}

export async function deleteOnePost(id){
    const response = await axios.delete(`http://localhost:5000/posts/${id}`);
    return response.status;
}

export async function changeOnePost(id, title, body){
    const response = await axios.post(`http://localhost:5000/posts/${id}`, {
        id: id,
        title: title,
        body: body
    })
    return response.status;
}

export async function addOnePost(title, body, author){
    const response = await axios.put(`http://localhost:5000/create`, {
        title: title,
        body: body,
        author: author
    })
    return response.status;
}
