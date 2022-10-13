import React, {useEffect, useState} from 'react';
import {deletePost} from "../utils/deletePost.js";

const PostForm = (props) => {
    const [allPosts, setAllPosts] = useState(props.posts)
    useEffect(() => {
        setAllPosts(props.posts)
    }, [props.posts])


    if(!props.posts || props.posts.length === 0) return <h1>Loading...</h1>

    return (
        <div className='post'>
            {allPosts.map((post, index) =>
                <div className='postForm' key={post.id}>
                    <p className='postTitle'>Title {post.id}: {post.title}</p>
                    <p className='postBody'>{post.body}</p>
                    <p className='postAuthor'>{post.userName}</p>
                    <div className='postBtn'>
                        <button
                            className='postBtnEdit'
                        ><a href={`/post/${post.id}`}>
                            Edit
                        </a></button>
                        <button onClick={() => deletePost(setAllPosts, allPosts, post.id)} className='postBtnDelete'>Delete</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PostForm;