import React, {useState} from 'react';
import {addOnePost} from "../api/api.js";
import SelectAuthor from "./selectAuthor.jsx";


const CreatePostModal = ({posts, addNewPost, usersName}) => {
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
            <SelectAuthor usersName={usersName} onChangeAuthor={onChangeAuthor}/>
            <div className='postBtnEdit'>
                <button className='postTextAreaBtnSave'
                        onClick={() => {
                            addOnePost(postTitle, postBody, postAuthor)
                              .then(res => console.log(res));
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