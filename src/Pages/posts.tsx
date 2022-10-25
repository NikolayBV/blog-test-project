import '../styles/normalize.css';
import '../styles/index.css';
import PostForm from "../components/postForm";
import Pagination from "../components/pagination";
import HeaderMenu from "../components/headerMenu";
import {IPost} from "../models/models";
import {useAppSelector} from "../store/hooks";

interface PostsProps{
    changePage: Function,
    limit: number
}

function Posts({changePage, limit}: PostsProps) {
    const postsCount = useAppSelector(state => state.posts.postsCount);

    return (
        <div className="App">
            <HeaderMenu/>
            <PostForm />
            <Pagination count={Math.ceil(postsCount/limit)} changePage={changePage}/>
        </div>
    );
}

export default Posts;