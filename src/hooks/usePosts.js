import React from "react";
import {getCountOfPosts, getPosts, getUsers} from "../api/api.ts";
import {useMemo, useState} from "react";

export function usePosts(limit, page){
    const [posts, setPosts] = useState([]);
    const lim = limit;
    const p = page;
    useMemo(async (lim, p) => {
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
    }, [page])
    //useMemo возвращает значения
}
// export function usePosts(limit, page, setPosts){
//     useMemo(async (limit, page) => {
//         const myUsers = await getUsers();
//         const myPosts = await getPosts(limit, page);
//
//         myPosts.map((post) => {
//             myUsers.map((user) => {
//                 if(post.userId === user.id){
//                     post.author = user.name
//                 }
//             })
//         })
//         setPosts(myPosts)
//     }, [setPosts])
// }