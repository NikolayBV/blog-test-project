import React, {SetStateAction, useEffect, useState} from 'react';
import PostItem from "../components/postItem";
import {getPostById} from "../api/api";
import {getIdFromUrl} from "../utils/getIdFromUrl";
import {IPost} from "../models/models";

interface Params{
    changePost: Function,
}


const OnePost = ({changePost}: Params) => {
    const [post, setPost] = useState<IPost>(Object);
    useEffect(()=> {
        (async () => {
            const id = getIdFromUrl()
            const myPost = await getPostById(id)
            setPost(myPost)
        })()
    }, [])
    return (
        <div>
           <PostItem post={post} changePost={changePost}/>
        </div>
    );
};

export default OnePost;
