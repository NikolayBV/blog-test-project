import React, {useState} from 'react';
import PostItem from "../components/postItem";
import {getAllPosts, getPostById, getPosts} from "../api/api";
import {getIdFromUrl} from "../utils/getIdFromUrl";

const OnePost = ({posts}) => {
    const [post, setPost] = useState( async () => {
        const id = getIdFromUrl()
        const myPost = await getPostById(id)
        setPost(myPost)
    });
    return (
        <div>
           <PostItem post={post} posts={posts}/>
        </div>
    );
};

export default OnePost;
