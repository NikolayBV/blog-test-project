import React, { useState } from 'react';
import MyButton from './UI/Button/MyButton';
import MyInput from './UI/Input/MyInput';

export const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', body: ''});

    const addNewPost = (e) => {
        e.preventDefault();
      
        // const newPost = {
        //     ...post, id: Date.now()
        // }

        // create(newPost)
        setPost({title: '', body: ''});
      }

    return (
        <form className='postEdit'>
            <h3 className="editHeading" >Edit title</h3>
            <MyInput value={post.title} onChange={(e) => setPost({...post, title: e.target.value})}></MyInput>
            <h3 className="editHeading">Edit text</h3>
            <MyInput value={post.body} onChange={(e) => setPost({...post, body: e.target.value})}></MyInput>
            <MyButton onClick={addNewPost}>Save</MyButton>
        </form>
    );
};

export default PostForm;