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


function App() {
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  function changePage(page: number){
    setPage(page)
  }

  // function addNewPost(posts: Array<IPost>, title: string, body: string, author: string){
  //   const addMyPost = {
  //     id: Date.now(),
  //     title: title,
  //     body: body,
  //     author: author,
  //   }
  //   const allPosts = [...posts, addMyPost];
  //   setPosts(allPosts)
  // }

  function changePost(posts: Array<IPost>, res: IPost): Array<IPost>{
    posts.map((item): IPost => {
      if(item.id === res.id){
        item.title = res.title;
        item.body = res.body;
        return item;
      }
      return item;
    })
    return posts
  }

  const dispatch = useAppDispatch();
  useEffect(() => {
    const obj = {page, limit}
    dispatch(fetchFullPosts(obj));
  }, [page])


  return (
    <BrowserRouter>
      <Routes>
          <Route path='/posts/:id' element={<OnePost/>}></Route>
          <Route path='/posts' element={<Posts changePage={changePage} limit={limit}/>}></Route>
          <Route path='/' element={<Posts changePage={changePage} limit={limit}/>}></Route>
          <Route path='/create' element={<AddPost />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
//todo: использовать Link
//todo: использовать одно состояние
//todo: описывать пропсы ts
export default App;
