import React from "react";
import axios from "axios";
import {IPost, IUser} from "../models/models";

export interface IGetPosts {
    posts: Array<IPost>,
    count: number
}
export interface GetParam {
    data: IGetPosts,
    count: number
}

export async function getPosts(limit: number | null, page: number | null): Promise<GetParam>{

        const response = await axios.get('http://localhost:5000/posts', {
            params: {
                limit,
                page,
            }
        });
        return {data: response.data, count: response.data.count};

}

export async function getUsers(){
    const response = await axios.get<Array<IUser>>('http://localhost:5000/users');
    return response.data;
}

export async function getPostById(id: string): Promise<IPost>{
    const response = await axios.get<IPost>(`http://localhost:5000/posts/${id}`);
    return response.data;
}

export async function deleteOnePost(id: number){
    const response = await axios.delete(`http://localhost:5000/posts/${id}`);
    return response.status;
}

export async function changeOnePost(id: number, title: string, body: string){
    try{
        const response = await axios.post(`http://localhost:5000/posts/${id}`, {
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
        const response = await axios.put(`http://localhost:5000/posts`, {
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
