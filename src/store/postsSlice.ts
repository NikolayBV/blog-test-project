import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {getPosts, getUsers} from "../api/api";
import {madeFullPost} from "../utils/madeFullPost";
import posts from "../pages/posts";
import {IPost} from "../models/models";


export const fetchFullPosts = createAsyncThunk<Array<IPost>, undefined, {rejectValue: string}>(
  'posts/fetchFullPosts',
  async function (_, {rejectWithValue}){
      const posts = await getPosts(10, 1);
      const users = await getUsers();
      if(!posts && !users){
        return rejectWithValue('Server Error!')
      }
      let fullPost = madeFullPost(posts.data, users);
      return fullPost;
  }

);

interface PostsState {
  posts: Array<IPost>,
  loading: boolean,
  error: null | string
}

const initialState: PostsState = {
  posts: [],
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
              state.posts = action.payload;
            })
    // [fetchFullPosts.rejected]: (state, action) => {},
  }
});


export const {createPost, deletePost, editPost} = postsSlice.actions;
export default postsSlice.reducer;