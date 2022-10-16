import '../styles/normalize.css';
import '../styles/index.css';
import PostForm from "../components/postForm";
import Pagination from "../components/pagination.jsx";
import HeaderMenu from "../components/headerMenu.jsx";

function Posts({limit, page, posts, postsCount, changePage}) {

    return (
        <div className="App">
            <HeaderMenu/>
            <PostForm posts={posts}/>
            <Pagination count={Math.ceil(postsCount/limit)} changePage={changePage}/>
        </div>
    );
}

export default Posts;