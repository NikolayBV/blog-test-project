import React from "react";
import axios from "axios";

export async function getPosts(limit = 10, page = 1){
    const response = await axios.get('http://localhost:5000/posts', {
        params: {
            limit: limit,
            page: page,
        }
    });
    return {data: response.data, count: response.headers['X-total-count']};
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
    return response.data.length;
}
//http://localhost:5000/posts