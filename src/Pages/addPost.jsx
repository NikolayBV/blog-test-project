import React from 'react';
import CreatePostModal from "../components/createPostModal.jsx";

const AddPost = ({posts, addNewPost}) => {
    return (
        <div>
            <CreatePostModal posts={posts} addNewPost={addNewPost}/>
        </div>
    );
};

export default AddPost;