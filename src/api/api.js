import React from "react";
import axios from "axios";

export async function getPosts(limit = 10, page = 1){
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
        params: {
            _limit: limit,
            _page: page,
        }
    });
    return {data: response.data, count: response.headers['x-total-count']};
}

export async function getUsers(){
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    return response.data;
}

export async function getPostById(id){
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return response.data;
}
