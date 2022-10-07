import React, { useEffect, useMemo, useState } from 'react';
import { getAll } from '../API/PostService';
import { useFetching } from '../components/Hooks/useFetching';
import { usePosts } from '../components/Hooks/usePosts';
import PostForm from '../components/PostForm';
import PostFilter from '../components/PostFilter';
import PostList from '../components/PostList';
import MyButton from '../components/UI/Button/MyButton';
import Loader from '../components/UI/Loader/Loader';
import MyModal from '../components/UI/MyModal/MyModal';
import Pagination from '../components/UI/Pagination/Pagination';
import { getPageCount } from '../Utils/Pages';


function Posts() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({sort: '', query: ''}) 
  const [modal, setModal] = useState(false)
  const [totalPages, setTotalPages] = useState(0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

  const [fetchPosts, isPostLoading, postError] = useFetching(async (limit, page) => {
    const response = await getAll(limit, page);
    setPosts(response.data);
    const totalCount = response.headers['x-total-count']
    setTotalPages(getPageCount(totalCount, limit))
  })

  useEffect(()=> {
    fetchPosts(limit, page)
  }, [])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }


  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const changePage = (page) => {
    setPage(page)
    fetchPosts(limit, page)
  }
  
  return (
    <div className="App">
      <MyButton onClick={() => setModal(true)}>
        Create Post
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost}/>
      </MyModal>
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      <hr style={{margin: '15px 0'}}/>
      {postError && <h1>Error: ${postError}</h1>}
      {isPostLoading
        ? <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}><Loader/></div>
        : <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Post list"/>
      }
      <Pagination page={page} changePage={changePage} totalPages={totalPages}/>
    </div>
  );
}

export default Posts;
