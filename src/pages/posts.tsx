import '../styles/normalize.css';
import '../styles/index.css';
import HeaderMenu from "../components/headerMenu";
import Footer from "../components/footer";
import PostForm from "../components/postForm";

function Posts() {
    return (
        <div className="App">
            <HeaderMenu/>
            <PostForm />
            {/*<MyPagination count={Math.ceil(postsCount/limit)} changePage={changePage}/>*/}
            <Footer/>
        </div>
    );
}

export default Posts;
