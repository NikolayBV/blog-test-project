import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../store/hooks";
import {deletePostFromList, fetchFullPosts, filterPost} from "../store/postsSlice";
import {TransitionGroup, CSSTransition} from "react-transition-group";
import {Button} from "@mui/material";
import {IPost} from "../models/models";


const PostForm = () => {
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const dispatch = useAppDispatch();
    const [isFetch, setIsFetch] = useState(true);
    const [allPost, setAllPost] = useState(Array<IPost>);
    const [posts, setPosts] = useState(Array<IPost>);

    useEffect(() => {
        dispatch(fetchFullPosts({page, limit}))
            .then((res) => {
                // @ts-ignore
                setAllPost(res.payload.posts);
                // @ts-ignore
                setPosts(res.payload.posts.filter(item => item.id <= limit));
            });
    }, [])

    useEffect(() => {
        if(isFetch) {
            setPosts([...posts, ...allPost.filter(item => item.id <= limit)]);
            setLimit(prevState => prevState + 10);
            setIsFetch(false);
        }
    }, [isFetch])

    useEffect(() => {
        document.addEventListener("scroll", scrollHandler);
        return function () {
            document.removeEventListener("scroll", scrollHandler);
        }
    }, [])

    const scrollHandler = (e: any) => {
        if(e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
            setIsFetch(true);
        }
    }
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
