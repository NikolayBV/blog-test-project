import '../src/styles/index.css';
import '../src/styles/normalize.css';
import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import OnePost from "./pages/onePost.jsx";
import Posts from "./pages/posts.jsx";

function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route path='/post/:id' element={<OnePost/>}></Route>
          <Route path='/posts' element={<Posts/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
