import '../src/styles/index.css';
import '../src/styles/normalize.css';
import React, {useEffect, useState, FC, SetStateAction} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import OnePost from "./pages/onePost";
import Posts from "./pages/posts";
import AddPost from "./pages/addPost";
import {getPosts, getUsers, IGetPosts} from "./api/api";
import {IPost, IUser} from "./models/models";
import {useDispatch, useSelector} from "react-redux";
import {madeFullPost} from "./utils/madeFullPost";
import {fetchFullPosts} from "./store/postsSlice";
import {useAppDispatch, useAppSelector} from "./store/hooks";


function App() {
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [postsCount, setPostsCount] = useState(0);
  const [posts, setPosts] = useState<Array<IPost>>([]);
  const [usersName, setUsersName] = useState<Array<IUser>>([]);

  useEffect(() => {
    (async () => {
      const posts = await getPosts(limit, page)
      const users = await getUsers();
      const arrayUsers: Array<IUser> = users.map((user) => {
          return {id: user.id, name: user.name}
        }
      );
      const fullPosts = madeFullPost(posts.data, users);
      setPostsCount(posts.count)
      setPosts(fullPosts)
      setUsersName(arrayUsers)
    })()
  }, [page])
  function changePage(page: number){
    setPage(page)
  }

  function addNewPost(posts: Array<IPost>, title: string, body: string, author: string){
    const addMyPost = {
      id: Date.now(),
      title: title,
      body: body,
      author: author,
    }
    const allPosts = [...posts, addMyPost];
    setPosts(allPosts)
  }

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
    dispatch(fetchFullPosts());
  }, [dispatch])

  const myPosts = useAppSelector(state => state.posts.posts);
  console.log(myPosts)

  return (
    <BrowserRouter>
      <Routes>
          <Route path='/posts/:id' element={<OnePost posts={posts} changePost={changePost}/>}></Route>
          <Route path='/posts' element={<Posts posts={posts} postsCount={postsCount} limit={limit} changePage={changePage} setPosts={setPosts}/>}></Route>
          <Route path='/' element={<Posts posts={posts} postsCount={postsCount} limit={limit} changePage={changePage} setPosts={setPosts}/>}></Route>
          <Route path='/create' element={<AddPost posts={posts} addNewPost={addNewPost} usersName={usersName}/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
//todo: использовать Link
//todo: использовать одно состояние
//todo: описывать пропсы ts
export default App;
