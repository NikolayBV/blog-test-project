import React from 'react';
import { useNavigate } from 'react-router-dom';
import MyButton from './UI/Button/MyButton';

const PostItem = (props) => {
    const router = useNavigate();
    return (
        <div className='post'>
            <p className='postHeading'>Title {props.post.id}: {props.post.title}</p>
            <p className='postText'>{props.post.body}</p>
            <p className='postAuthor'>Author</p>
            <div className='btnPost'>
                <MyButton onClick={() => router(`/posts/${props.post.id}`)}>Open post</MyButton>
                <MyButton onClick={() => props.remove(props.post)}>Delete post</MyButton>
            </div>
        </div>
    );
};

export default PostItem;