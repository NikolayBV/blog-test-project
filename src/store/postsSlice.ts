import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {getPosts, getUsers} from "../api/api";
import {madeFullPost} from "../utils/madeFullPost";
import {GetParam, IPost, IUser, ObjInMainState, PostsState} from "../models/models";



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

export const changeOnePost = createAsyncThunk(
    'posts/changeOnePost',
    async function (post, {rejectWithValue, dispatch}){

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
    // [fetchFullPosts.rejected]: (state, action) => {},
  }
});


export const {createPost, deletePost, editPost} = postsSlice.actions;
export default postsSlice.reducer;