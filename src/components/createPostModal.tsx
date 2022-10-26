import React, {useState} from 'react';
import {addOnePost} from "../api/api";
import SelectAuthor from "./selectAuthor";
import {IPost, IUser} from "../models/models";
import {useAppDispatch, useAppSelector} from "../store/hooks";
import {createMyPost} from "../store/postsSlice";

const CreatePostModal = () => {
    const [postTitle, setPostTitle] = useState('')
    const [postBody, setPostBody] = useState('')
    const [postAuthor, setPostAuthor] = useState('')

    function onChangeTitle(e: React.ChangeEvent<HTMLTextAreaElement>){
        setPostTitle(e.target.value)
    }
    function onChangeBody(e: React.ChangeEvent<HTMLTextAreaElement>){
        setPostBody(e.target.value)
    }
  function onChangeAuthor(e:React.ChangeEvent<HTMLSelectElement>){
    setPostAuthor(e.target.value)
  }
    const usersName = useAppSelector(state => state.posts.usersName);
    const dispatch = useAppDispatch();
    return (
        <div className='postEditForm'>
            <textarea placeholder='Enter title' onChange={onChangeTitle} className='postTextAreaTitle' ></textarea>
            <textarea placeholder='Enter body' onChange={onChangeBody} className='postTextAreaBody'></textarea>
            <SelectAuthor usersName={usersName} onChangeAuthor={onChangeAuthor}/>
            <div className='postBtnEdit'>
                <button className='postTextAreaBtnSave'
                        onClick={() => {
                            const obj = {
                                id: Date.now(),
                                title: postTitle,
                                body: postBody,
                                author: postAuthor
                            }
                            dispatch(createMyPost(obj));
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