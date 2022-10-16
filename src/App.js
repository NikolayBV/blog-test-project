import '../src/styles/index.css';
import '../src/styles/normalize.css';
import React, {useEffect, useState} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import OnePost from "./pages/onePost.jsx";
import Posts from "./pages/posts.jsx";
import AddPost from "./pages/addPost.jsx";
import {getAllPosts, getPosts, getUsers} from "./api/api.js";

function App() {
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
      const postsCount = await getPosts();
      const fullPosts = madeFullPost(posts.data, users);
      setPosts(fullPosts)
      setPostsCount(postsCount.length)
    })()
  }, [page])
  function changePage(page){
    setPage(page)
  }
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/posts/:id' element={<OnePost posts={posts}/>}></Route>
          <Route path='/posts' element={<Posts posts={posts} postsCount={postsCount} page={page} limit={limit} changePage={changePage}/>}></Route>
          <Route path='/' element={<Posts posts={posts} postsCount={postsCount} page={page} limit={limit} changePage={changePage}/>}></Route>
          <Route path='/create' element={<AddPost/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
//todo: использовать Link
//todo: использовать одно состояние
//todo: описывать пропсы ts
export default App;
