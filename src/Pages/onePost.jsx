import React, {useState} from 'react';
import PostItem from "../components/postItem";
import {getAllPosts, getPostById} from "../api/api";
import {getIdFromUrl} from "../utils/getIdFromUrl";

const OnePost = () => {
    const [post, setPost] = useState( async () => {
        const id = getIdFromUrl()
        const myPost = await getPostById(id)
        setPost(myPost)
    });
    const [posts, setPosts] = useState(async () => {
        const allPosts = await getAllPosts();
        setPosts(allPosts)
    })

    return (
        <div>
           <PostItem post={post} posts={posts}/>
        </div>
    );
};

export default OnePost;
