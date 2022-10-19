import React from "react";
import {getPosts, getUsers} from "../api/api.js";
import {useMemo, useState} from "react";

export function usePost(limit, page, setPosts){
    useMemo(async (limit, page) => {
        const myUsers = await getUsers();
        const myPosts = await getPosts(limit, page);
        myPosts.map((post) => {
            myUsers.map((user) => {
                if(post.userId === user.id){
                    post.author = user.name
                }
            })
        })
        setPosts(myPosts)
    }, [setPosts])
}