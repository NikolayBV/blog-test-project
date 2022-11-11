import '../src/styles/index.css';
import '../src/styles/normalize.css';
import React, {useEffect, useState, FC, SetStateAction} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import OnePost from "./pages/onePost";
import Posts from "./pages/posts";
import AddPost from "./pages/addPost";
import {GetParam, getPosts, getUsers, IGetPosts} from "./api/api";
import {IPost, IUser} from "./models/models";
import {useDispatch, useSelector} from "react-redux";
import {madeFullPost} from "./utils/madeFullPost";
import {fetchFullPosts} from "./store/postsSlice";
import {useAppDispatch, useAppSelector} from "./store/hooks";
import Authorization from "./pages/authorization";


function App() {
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  function changePage(page: number){
    setPage(page)
  };

  const dispatch = useAppDispatch();
  useEffect(() => {
    const obj = {page, limit}
    dispatch(fetchFullPosts(obj));
  }, [page]);


  return (
    <BrowserRouter>
      <Routes>
          <Route path='/posts/:id' element={<OnePost/>}></Route>
          <Route path='/posts' element={<Posts changePage={changePage} limit={limit}/>}></Route>
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
