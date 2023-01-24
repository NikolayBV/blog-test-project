import React from 'react';
import CreatePostModal from "../components/createPostModal";
import {IPost, IUser} from "../models/models";

const AddPost = () => {
    return (
        <div>
            <CreatePostModal />
        </div>
    );
};

export default AddPost;