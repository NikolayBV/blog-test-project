import React from "react";
import axios from "axios";
import {IPost, IUser} from "../models/models";
const baseUrl = 'http://localhost:8080/';

export interface IGetPosts {
    posts: Array<IPost>,
    count: number
}
export interface GetParam {
    data: IGetPosts,
    count: number
}

export async function getPosts(limit?: number | null, page?: number | null): Promise<GetParam>{

        const response = await axios.get(baseUrl+'posts', {
            params: {
                limit,
                page,
            }
        });
        return {data: response.data, count: response.data.count};

}

export async function getUsers(){
    const response = await axios.get<Array<IUser>>(baseUrl + 'users');
    return response.data;
}

export async function getPostById(id: string): Promise<IPost>{
    const response = await axios.get<IPost>(baseUrl + `posts/${id}`);
    return response.data;
}

export async function deleteOnePost(id: number){
    const response = await axios.delete(baseUrl + `posts/${id}`);
    return response.status;
}

export async function changeOnePost(id: number, title: string, body: string){
    try{
        const response = await axios.put(baseUrl + `posts/${id}`, {
            id: id,
            title: title,
            body: body
        })
        return response.data;
    }
    catch (e){
        return e;
    }
}

export async function addOnePost(title: string, body: string, author: string){
    try{
        const response = await axios.post(baseUrl + `posts`, {
            title: title,
            body: body,
            author: author
        });
        return response.data;
    }
    catch (e){
        return e;
    }
}

export async function checkUser(name: string, userName: string, email: string){
    try {
        const response = await axios.post(baseUrl + 'user', {
            name: name,
            userName: userName,
            email: email
        });
        return response.data;
    }
    catch (e){
        return e;
    }
}
export async function createUser(name: string, userName: string, email: string){
    try {
        const response = await axios.post(baseUrl + 'createUser', {
            name: name,
            userName: userName,
            email: email
        });
        return response.data;
    }
    catch (e){
        return e;
    }
}
