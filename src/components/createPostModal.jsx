import React, {useState} from 'react';
import {addOnePost, changeOnePost} from "../api/api.js";


const CreatePostModal = () => {
    const [postTitle, setPostTitle] = useState('')
    const [postBody, setPostBody] = useState('')

    function onChangeTitle(e){
        setPostTitle(e.target.value)
    }
    function onChangeBody(e){
        setPostBody(e.target.value)
    }

    return (
        <div className='postEditForm'>
            <textarea placeholder='Enter title' onChange={onChangeTitle} className='postTextAreaTitle' ></textarea>
            <textarea placeholder='Enter body' onChange={onChangeBody} className='postTextAreaBody'></textarea>
            <div className='postBtnEdit'>
                <button className='postTextAreaBtnSave'
                        onClick={() => {
                            addOnePost(Date.now(), postTitle, postBody);
                        }}
                >
                    Save
                </button>
                <button className='postTextAreaBtnSave' onClick={() => window.history.go(-1)}>Back</button>
            </div>
        </div>
    );
};

export default CreatePostModal;