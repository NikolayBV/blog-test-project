import React, {useState} from 'react';
import {changeOnePost} from "../api/api.js";

const PostItem = ({post, posts}) => {
    const [postTitle, setPostTitle] = useState('')
    const [postBody, setPostBody] = useState('')
    function onChangeTitle(e){
        setPostTitle(e.target.value)
    }
    function onChangeBody(e){
        setPostBody(e.target.value)
    }
    function changePost(){
        posts.map((item) => {
            if(item.id == post.id){
                item.title = postTitle;
                item.body = postBody;
            }
        })
    }

    return (
        <div className='postEditForm'>
            <textarea defaultValue={post.title} onChange={onChangeTitle} className='postTextAreaTitle' ></textarea>
            <textarea defaultValue={post.body} onChange={onChangeBody} className='postTextAreaBody'></textarea>
            <div className='postBtnEdit'>
                <button className='postTextAreaBtnSave'
                        onClick={() => {
                            changePost();
                            changeOnePost(post.id, postTitle, postBody);
                        }}
                >
                    Save
                </button>
                <button className='postTextAreaBtnSave' onClick={() => window.history.go(-1)}>Back</button>
            </div>
        </div>
    );
};

export default PostItem;