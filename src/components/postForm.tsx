import React, {useEffect, useState} from 'react';
import {deletePost} from "../utils/deletePost";
import {deleteOnePost} from "../api/api";
import {Link} from "react-router-dom";
import {IPost} from "../models/models";

interface IPostForm{
    posts: Array<IPost>,
    setPosts: Function
}

const PostForm = ({posts, setPosts}: IPostForm) => {
    // const [allPosts, setAllPosts] = useState(props.posts)
    // useEffect(() => {
    //     setAllPosts(props.posts)
    // }, [props.posts])


    if(!posts || posts.length === 0) return <h1>Loading...</h1>

    return (
        <div className='post'>
            {posts.map((post, index) =>
                <div className='postForm' key={post.id}>
                    <p className='postTitle'>Title {post.id}: {post.title}</p>
                    <p className='postBody'>{post.body}</p>
                    <p className='postAuthor'>{post.userName || post.author}</p>
                    <div className='postBtn'>
                        <button
                            className='postBtnEdit'
                        ><Link to={`/posts/${post.id}`}>
                            Edit
                        </Link></button>
                        <button onClick={() => {
                            deletePost(setPosts, posts, post.id);
                            deleteOnePost(post.id);
                            }
                        } className='postBtnDelete'
                        >
                            Delete
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PostForm;