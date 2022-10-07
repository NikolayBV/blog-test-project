import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getById } from '../API/PostService';
import { useFetching } from '../components/Hooks/useFetching';
import Loader from '../components/UI/Loader/Loader';

const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState({})
    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await getById(id)
        setPost(response.data)
    })

    useEffect(() => {
        fetchPostById(params.id)
    }, [])
    
    return (
        <div>
            <h1>Post {params.id}</h1>
            {isLoading
                ? <Loader/>
                :<div>
                    <p>Title: {post.title}</p>  
                    <p>Body: {post.body}</p> 
                </div>
            }
        </div>
    );
};

export default PostIdPage;