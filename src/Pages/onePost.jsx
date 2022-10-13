import React, {useState} from 'react';
import PostForm from "../components/postForm";
import PostItem from "../components/postItem";
import {getPostById} from "../api/api";
import {getIdFromUrl} from "../utils/getIdFromUrl";

const OnePost = () => {
    const [post, setPost] = useState( async () => {
        const id = getIdFromUrl()
        const myPost = await getPostById(id)
        setPost(myPost)
    });

    return (
        <div>
           <PostItem post={post}/>
        </div>
    );
};

export default OnePost;
