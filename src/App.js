import '../src/styles/index.css';
import '../src/styles/normalize.css';
import React, {useEffect, useState, FC} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import OnePost from "./pages/onePost.jsx";
import Posts from "./pages/posts.jsx";
import AddPost from "./pages/addPost.jsx";
import {getPosts, getUsers} from "./api/api.js";

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
      const fullPosts = madeFullPost(posts.data, users);
      setPostsCount(posts.count)
      setPosts(fullPosts)
    })()
  }, [page])
  function changePage(page){
    setPage(page)
  }

  function addNewPost(posts, title, body, author){
    const addMyPost = {
      id: Date.now(),
      title: title,
      body: body,
      author: author,
    }
    const allPosts = [...posts, addMyPost];
    setPosts(allPosts)
  }

  function changePost(posts, res){
    posts.map((item) => {
      if(item.id === res.id){
        item.title = res.title;
        item.body = res.body;
      }
    })
  }

  return (
    <BrowserRouter>
      <Routes>
          <Route path='/posts/:id' element={<OnePost posts={posts} changePost={changePost}/>}></Route>
          <Route path='/posts' element={<Posts posts={posts} postsCount={postsCount} page={page} limit={limit} changePage={changePage} setPosts={setPosts}/>}></Route>
          <Route path='/' element={<Posts posts={posts} postsCount={postsCount} page={page} limit={limit} changePage={changePage} setPosts={setPosts}/>}></Route>
          <Route path='/create' element={<AddPost posts={posts} addNewPost={addNewPost}/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
//todo: использовать Link
//todo: использовать одно состояние
//todo: описывать пропсы ts
export default App;
