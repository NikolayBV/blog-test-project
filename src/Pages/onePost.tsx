import React, {SetStateAction, useEffect, useState} from 'react';
import PostItem from "../components/postItem";
import {getPostById} from "../api/api";
import {getIdFromUrl} from "../utils/getIdFromUrl";
import {IPost} from "../models/models";

interface Params{
    posts?: Array<IPost>,
    changePost: SetStateAction<IPost>
}

const OnePost = ({posts, changePost}: Params) => {
    const [post, setPost] = useState<IPost>();
    useEffect(()=> {
        (async () => {
            const id = getIdFromUrl()
            const myPost = await getPostById(id)
            setPost(myPost)
        })()
    })
    return (
        <div>
           <PostItem post={post} posts={posts} changePost={changePost}/>
        </div>
    );
};

export default OnePost;
