import '../styles/normalize.css';
import '../styles/index.css';
import PostForm from "../components/postForm";
import {useEffect, useMemo, useState} from "react";
import {usePosts} from "../hooks/usePosts";
import {getAllPosts, getCountOfPosts, getPosts, getUsers} from "../api/api.js";
import Pagination from "../components/pagination.jsx";

function Posts() {
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const [postsCount, setPostsCount] = useState(0);
    const [posts, setPosts] = useState([]);
    const madeFullPost = (posts, users) => {
        return posts.map((post) => {
            if(post.author){
                return post;
            }
            else{
                const user = users.find((user) => post.userId === user.id);
                const userName = user?.name ? user.name : "anonymus";
                const newPost = {...post, userName};
                return newPost;
            }
        })
    };
    useEffect(() => {
        (async () => {
            const posts = await getPosts(limit, page)
            const users = await getUsers();
            const postsCount = await getAllPosts();
            const fullPosts = madeFullPost(posts.data, users);
            setPosts(fullPosts)
            setPostsCount(postsCount.length)
        })()
    }, [page])

    function changePage(page){
        setPage(page)
    }

    return (
        <div className="App">
            <PostForm posts={posts}/>
            <Pagination count={Math.ceil(postsCount/limit)} changePage={changePage}/>
        </div>
    );
}

export default Posts;