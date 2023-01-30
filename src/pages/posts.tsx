import '../styles/normalize.css';
import '../styles/index.css';
import PostForm from "../components/postForm";
import MyPagination from "../components/myPagination";
import HeaderMenu from "../components/headerMenu";
import {IPost} from "../models/models";
import {useAppSelector} from "../store/hooks";
import Footer from "../components/footer";

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
            <MyPagination count={Math.ceil(postsCount/limit)} changePage={changePage}/>
            <Footer/>
        </div>
    );
}

export default Posts;
