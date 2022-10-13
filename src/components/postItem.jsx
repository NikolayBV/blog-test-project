import React, {useState} from 'react';

const PostItem = ({post}) => {
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
            <textarea defaultValue={post.title} onChange={onChangeTitle} className='postTextAreaTitle' ></textarea>
            <textarea defaultValue={post.body} onChange={onChangeBody} className='postTextAreaBody'></textarea>
            <div className='postBtnEdit'>
                <button className='postTextAreaBtnSave'>Save</button>
                <button className='postTextAreaBtnSave' onClick={() => window.history.go(-1)}>Back</button>
            </div>
        </div>
    );
};

export default PostItem;