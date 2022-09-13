import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllPost = createAsyncThunk(
  "post/getAllPost",
  async (thunkAPI) => {
    try {
      const response = await axios.get("api/posts");

      const data = { data: response.data, status: response.status };
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        data: error.response.data,
        status: error.response.status,
      });
    }
  }
);

export const getUserPost = createAsyncThunk(
  "post/getUserPost",
  async (username, thunkAPI) => {
    try {
      const response = await axios.get(`/api/posts/user/${username}`);
      const data = { data: response.data, status: response.status };
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        data: error.response.data,
        status: error.response.status,
      });
    }
  }
);

export const createPost = createAsyncThunk(
  "post/createPost",
  async ({ postData, token }, thunkAPI) => {
    try {
      const response = await axios.post(
        "api/posts",
        { postData },
        { headers: { authorization: token } }
      );
      const data = { data: response.data, status: response.status };
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        data: error.response.data,
        status: error.response.status,
      });
    }
  }
);

export const deletePost = createAsyncThunk(
  "post/deletePost",
  async ({ post, token }, thunkAPI) => {
    try {
      const response = await axios.delete(`/api/posts/${post._id}`, {
        headers: { authorization: token },
      });
      const data = { data: response.data, status: response.status };
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        data: error.response.data,
        status: error.response.status,
      });
    }
  }
);

export const editPosts = createAsyncThunk(
  "post/editPost",
  async ({ postData, token }, thunkAPI) => {
    try {
      const response = await axios.post(
        `/api/posts/edit/${postData._id}`,
        { postData },
        {
          headers: { authorization: token },
        }
      );
      const data = { data: response.data, status: response.status };
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        data: error.response.data,
        status: error.response.status,
      });
    }
  }
);

export const likePost = createAsyncThunk(
  "post/likePost",
  async ({ postId, token }, thunkAPI) => {
    try {
      const response = await axios.post(
        `/api/posts/like/${postId}`,
        {},
        {
          headers: { authorization: token },
        }
      );
      const data = { data: response.data, status: response.status };
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        data: error.response.data,
        status: error.response.status,
      });
    }
  }
);

export const dislikePost = createAsyncThunk(
  "post/dislikePost",
  async ({ postId, token }, thunkAPI) => {
    try {
      const response = await axios.post(
        `/api/posts/dislike/${postId}`,
        {},
        {
          headers: { authorization: token },
        }
      );
      const data = { data: response.data, status: response.status };
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        data: error.response.data,
        status: error.response.status,
      });
    }
  }
);

export const bookmarkPost = createAsyncThunk(
  "post/bookmarkPost",
  async ({ postId, token }, thunkAPI) => {
    try {
      const response = await axios.post(
        `api/users/bookmark/${postId}`,
        {},
        {
          headers: { authorization: token },
        }
      );
      const data = { data: response.data, status: response.status };
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        data: error.response.data,
        status: error.response.status,
      });
    }
  }
);

export const removeBookmarkPost = createAsyncThunk(
  "post/removeBookmarkPost",
  async ({ postId, token }, thunkAPI) => {
    try {
      const response = await axios.post(
        `/api/users/remove-bookmark/${postId}`,
        {},
        {
          headers: { authorization: token },
        }
      );
      const data = { data: response.data, status: response.status };
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        data: error.response.data,
        status: error.response.status,
      });
    }
  }
);

export const addComment = createAsyncThunk(
  "post/addComment",
  async ({ postId, commentData, token }, thunkAPI) => {
    try {
      const response = await axios.post(
        `/api/comments/add/${postId}`,
        { commentData },
        { headers: { authorization: token } }
      );
      const data = { data: response.data, status: response.status };
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        data: error.response.data,
        status: error.response.status,
      });
    }
  }
);

export const deleteComment = createAsyncThunk(
  "post/deleteComment",
  async ({ postId, commentId, token }, thunkAPI) => {
    try {
      const response = await axios.post(
        `/api/comments/delete/${postId}/${commentId}`,
        {},
        { headers: { authorization: token } }
      );
      const data = { data: response.data, status: response.status };
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        data: error.response.data,
        status: error.response.status,
      });
    }
  }
);

export const editComment = createAsyncThunk(
  "post/editComment",
  async ({ postId, commentId, commentData, token }, thunkAPI) => {
    try {
      const response = await axios.post(
        `/api/comments/edit/${postId}/${commentId}`,
        { commentData },
        { headers: { authorization: token } }
      );
      const data = { data: response.data, status: response.status };
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        data: error.response.data,
        status: error.response.status,
      });
    }
  }
);
const initialState = {
  allPosts: [],
  userPosts: [],
  status: "idle",
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllPost.pending]: (state) => {
      state.status = "pending";
    },
    [getAllPost.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.allPosts = action.payload.data.posts;
    },
    [getAllPost.rejected]: (state, action) => {
      state.status = "rejected";
      console.error(action.payload.data.errors[0]);
    },
    [getUserPost.pending]: (state) => {
      state.status = "pending";
    },
    [getUserPost.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.userPosts = action.payload.data.posts;
    },
    [getUserPost.rejected]: (state, action) => {
      state.status = "rejected";
      console.error(action.payload.data.errors[0]);
    },
    [createPost.pending]: (state) => {
      state.status = "pending";
    },
    [createPost.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.allPosts = action.payload.data.posts;
    },
    [createPost.rejected]: (state, action) => {
      state.status = "rejected";
      console.error(action.payload.data.errors[0]);
    },
    [editPosts.pending]: (state) => {
      state.status = "pending";
    },
    [editPosts.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.allPosts = action.payload.data.posts;
    },
    [editPosts.rejected]: (state, action) => {
      state.status = "rejected";
      console.error(action.payload.data.errors[0]);
    },
    [deletePost.pending]: (state) => {
      state.status = "pending";
    },
    [deletePost.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.allPosts = action.payload.data.posts;
    },
    [deletePost.rejected]: (state, action) => {
      state.status = "rejected";
      console.error(action.payload.data.errors[0]);
    },
    [likePost.pending]: (state) => {
      state.status = "pending";
    },
    [likePost.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.allPosts = action.payload.data.posts;
    },
    [likePost.rejected]: (state, action) => {
      state.status = "rejected";
      console.error(action.payload.data.errors[0]);
    },
    [dislikePost.pending]: (state) => {
      state.status = "pending";
    },
    [dislikePost.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.allPosts = action.payload.data.posts;
    },
    [dislikePost.rejected]: (state, action) => {
      state.status = "rejected";
      console.error(action.payload.data.errors[0]);
    },
    [bookmarkPost.pending]: (state) => {
      state.status = "pending";
    },
    [bookmarkPost.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.allPosts = action.payload.data.posts;
    },
    [bookmarkPost.rejected]: (state, action) => {
      state.status = "rejected";
      console.error(action.payload.data.errors[0]);
    },
    [removeBookmarkPost.pending]: (state) => {
      state.status = "pending";
    },
    [removeBookmarkPost.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.allPosts = action.payload.data.posts;
    },
    [removeBookmarkPost.rejected]: (state, action) => {
      state.status = "rejected";
      console.error(action.payload.data.errors[0]);
    },
    [addComment.pending]: (state) => {
      state.status = "pending";
    },
    [addComment.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.allPosts = action.payload.data.posts;
    },
    [addComment.rejected]: (state, action) => {
      state.status = "rejected";
      console.error(action.payload.data.errors[0]);
    },
    [deleteComment.pending]: (state) => {
      state.status = "pending";
    },
    [deleteComment.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.allPosts = action.payload.data.posts;
    },
    [deleteComment.rejected]: (state, action) => {
      state.status = "rejected";
      console.error(action.payload.data.errors[0]);
    },
    [editComment.pending]: (state) => {
      state.status = "pending";
    },
    [editComment.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.allPosts = action.payload.data.posts;
    },
    [editComment.rejected]: (state, action) => {
      state.status = "rejected";
      console.error(action.payload.data.errors[0]);
    },
  },
});

export default postSlice.reducer;
