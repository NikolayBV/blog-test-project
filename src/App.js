import '../src/styles/index.css';
import '../src/styles/normalize.css';
import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import OnePost from "./pages/onePost.jsx";
import Posts from "./pages/posts.jsx";
import CreatePostModal from "./components/createPostModal.jsx";
import AddPost from "./pages/addPost.jsx";

function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route path='/post/:id' element={<OnePost/>}></Route>
          <Route path='/posts' element={<Posts/>}></Route>
          <Route path='/' element={<Posts/>}></Route>
          <Route path='/posts/add' element={<AddPost/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
