import React, {SetStateAction, useState} from 'react';
import {changeOnePost} from "../api/api";
import {IPost} from "../models/models";
import {changePost} from "../store/postsSlice";
import {useAppDispatch, useAppSelector} from "../store/hooks";

interface Params{
    post: IPost,
}

const PostItem = ({post}: Params) => {
    const [postTitle, setPostTitle] = useState('')
    const [postBody, setPostBody] = useState('')
    function onChangeTitle(e: React.ChangeEvent<HTMLTextAreaElement>){
        setPostTitle(e.target.value)
    }
    function onChangeBody(e: React.ChangeEvent<HTMLTextAreaElement>){
        setPostBody(e.target.value)
    }
    const posts = useAppSelector(state => state.posts.posts);
    const dispatch = useAppDispatch();
    return (
        <div className='postEditForm'>
            <textarea defaultValue={post.title} onChange={onChangeTitle} className='postTextAreaTitle' ></textarea>
            <textarea defaultValue={post.body} onChange={onChangeBody} className='postTextAreaBody'></textarea>
            <div className='postBtnEdit'>
                <button className='postTextAreaBtnSave'
                        onClick={() => {
                            const obj = {
                                id: post.id,
                                title: postTitle,
                                body: postBody
                            }
                            dispatch(changePost(obj));
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