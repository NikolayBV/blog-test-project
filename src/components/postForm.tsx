import React from 'react';
import {Link} from "react-router-dom";
import {IPost} from "../models/models";
import {useAppDispatch, useAppSelector} from "../store/hooks";
import {deletePostFromList} from "../store/postsSlice";
import {TransitionGroup, CSSTransition} from "react-transition-group";
import {Button} from "@mui/material";

interface IPostForm{
    posts: Array<IPost>,
    setPosts: Function
}

const PostForm = () => {
    const posts = useAppSelector(state => state.posts.posts);

    const dispatch = useAppDispatch();
    if(!posts || posts.length === 0) return <h1>Loading...</h1>;

    return (
        <div className='post'>
            <TransitionGroup>
                {posts.map((post, index) =>
                    <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames='transitionItem'
                    >
                        <div className='postForm'>
                            <p className='postTitle'>Title {post.id}: {post.title}</p>
                            <p className='postBody'>{post.body}</p>
                            <p className='postAuthor'>{post.userName || post.author}</p>
                            <div className='postBtn'>
                                <Button
                                    variant="contained"
                                    style={{position: "static"}}
                                ><Link to={`/posts/${post.id}`} style={{textDecoration: "none", color: "#ffffff"}}>
                                    Edit
                                </Link></Button>
                                <Button
                                    variant="contained"
                                    style={{position: "static"}}
                                    onClick={() => {
                                    dispatch(deletePostFromList(post.id))
                                    }
                                }
                                >
                                    Delete
                                </Button>
                            </div>
                        </div>
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    );
};

export default PostForm;
