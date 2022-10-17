import React, {useState} from 'react';
import {addOnePost, changeOnePost} from "../api/api.js";


const CreatePostModal = ({posts, addNewPost}) => {
    const [postTitle, setPostTitle] = useState('')
    const [postBody, setPostBody] = useState('')
    const [postAuthor, setPostAuthor] = useState('')

    function onChangeTitle(e){
        setPostTitle(e.target.value)
    }
    function onChangeBody(e){
        setPostBody(e.target.value)
    }
  function onChangeAuthor(e){
    setPostAuthor(e.target.value)
  }

    return (
        <div className='postEditForm'>
            <textarea placeholder='Enter title' onChange={onChangeTitle} className='postTextAreaTitle' ></textarea>
            <textarea placeholder='Enter body' onChange={onChangeBody} className='postTextAreaBody'></textarea>
            <textarea placeholder='Enter author' onChange={onChangeAuthor} className='postTextAreaAuthor'></textarea>
            <div className='postBtnEdit'>
                <button className='postTextAreaBtnSave'
                        onClick={() => {
                            addOnePost(postTitle, postBody, postAuthor)
                              // .then(res => {
                              //   if(res){
                              //     addNewPost(posts, postTitle, postBody, postAuthor)
                              //   }
                              //   else{
                              //     throw new Error("Error")
                              //   }
                              // })
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