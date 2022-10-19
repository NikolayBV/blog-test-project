import '../styles/normalize.css';
import '../styles/index.css';
import PostForm from "../components/postForm";
import Pagination from "../components/pagination";
import HeaderMenu from "../components/headerMenu";
import {IPost} from "../models/models";

interface PostsProps{
    limit: number,
    posts: Array<IPost>,
    postsCount: number,
    changePage: Function,
    setPosts: Function,
}

function Posts({limit, posts, postsCount, changePage, setPosts}: PostsProps) {

    return (
        <div className="App">
            <HeaderMenu/>
            <PostForm posts={posts} setPosts={setPosts}/>
            <Pagination count={Math.ceil(postsCount/limit)} changePage={changePage}/>
        </div>
    );
}

export default Posts;