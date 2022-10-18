import React from 'react';
import CreatePostModal from "../components/createPostModal.jsx";

const AddPost = ({posts, addNewPost, usersName}) => {
    return (
        <div>
            <CreatePostModal posts={posts} addNewPost={addNewPost} usersName={usersName}/>
        </div>
    );
};

export default AddPost;