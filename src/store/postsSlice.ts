import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {changeOnePost, getPosts, getUsers, deleteOnePost, addOnePost} from "../api/api";
import {madeFullPost} from "../utils/madeFullPost";
import {AddPost, GetParam, IPost, IUser, ObjInMainState, PostsState} from "../models/models";
import {response} from "express";



export const fetchFullPosts = createAsyncThunk<ObjInMainState, GetParam, {rejectValue: string}>(
  'posts/fetchFullPosts',
  async function (param, {rejectWithValue}){
      const page = param.page;
      const limit = param.limit;
      const posts = await getPosts(limit, page);
      const users = await getUsers();
      const usersName = users.map((user) => {
          return {id: user.id, name: user.name}
      });

      if(!posts && !users){
        return rejectWithValue('Server Error!')
      }
      const fullPosts = madeFullPost(posts.data, users);
      const postsCount = posts.count;
      const obj: ObjInMainState = {
          posts: fullPosts,
          usersName: usersName,
          count: postsCount
      }
      return obj;
  }
);

export const changePost = createAsyncThunk<IPost, IPost, {rejectValue: string}>(
    'posts/changeOnePost',
    async function (post, {rejectWithValue}){
        const postId = post.id;
        const postTitle = post.title;
        const postBody = post.body;
        const response: IPost = await changeOnePost(postId, postTitle, postBody);
        return response;
    }
);

export const deletePostFromList = createAsyncThunk<number, number, {rejectValue: string}>(
    'posts/deletePost',
    async function (id,{rejectWithValue}){
        const response = await deleteOnePost(id);
        return id;
    }
);

export const createMyPost = createAsyncThunk< IPost,IPost, {rejectValue: string}>(
    'posts/createPost',
    async function (post, {rejectWithValue}){
        const postTitle = post.title;
        const postBody = post.body;
        const postAuthor = post.author;
        const response: IPost = await addOnePost(postTitle, postBody, postAuthor!);
        return post;
    }
)


const initialState: PostsState = {
    posts: [],
    postsCount: 0,
    usersName: [],
    loading: false,
    error: null
}

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    createPost(state, action){
    },
    deletePost(state, action){},
    editPost(state, action){}
  },
  extraReducers: (builder) => {
    builder
        .addCase(
            fetchFullPosts.pending, (state) => {
              state.loading = true;
              state.error = null;
            })
        .addCase(
            fetchFullPosts.fulfilled, (state, action) => {
              state.loading = false;
              state.posts = action.payload.posts;
              state.postsCount = action.payload.count;
              state.usersName = action.payload.usersName;
            })
        .addCase(
            changePost.fulfilled, (state, action) => {
                state.posts.map((post) =>{
                    if(post.id === action.payload.id){
                        post.title = action.payload.title;
                        post.body = action.payload.body;
                        return post;
                    }
                    return post;
                })
            }
        )
        .addCase(
            deletePostFromList.fulfilled, (state, action) => {
                state.posts = state.posts.filter((post) =>
                    post.id !== action.payload
                );
                state.postsCount = state.postsCount - 1;
            }
        )
        .addCase(
            createMyPost.fulfilled, (state, action) => {
                alert('Post added!');
            }

        )
  }
});



export default postsSlice.reducer;