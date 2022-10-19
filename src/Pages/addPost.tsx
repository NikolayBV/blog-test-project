import React from 'react';
import CreatePostModal from "../components/createPostModal";
import {IPost, IUser} from "../models/models";

interface IAddPost {
    posts: Array<IPost>,
    addNewPost: Function,
    usersName: Array<IUser>
}
const AddPost = ({posts, addNewPost, usersName}: IAddPost) => {
    return (
        <div>
            <CreatePostModal posts={posts} addNewPost={addNewPost} usersName={usersName}/>
        </div>
    );
};

export default AddPost;