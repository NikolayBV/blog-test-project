import '../src/styles/index.css';
import '../src/styles/normalize.css';
import React, {useEffect, useState} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import OnePost from "./pages/onePost";
import Posts from "./pages/posts";
import AddPost from "./pages/addPost";
import Authorization from "./pages/authorization";
import {useAppSelector} from "./store/hooks";


function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route path='/posts/:id' element={<OnePost/>}></Route>
          <Route path='/posts' element={<Posts />}></Route>
          <Route path='/' element={<Authorization/>}></Route>
          <Route path='/create' element={<AddPost />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
//todo: использовать Link
//todo: использовать одно состояние
//todo: описывать пропсы ts
export default App;
