import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  token: localStorage.getItem("token") || null,
};

export const loginUser = createAsyncThunk(
  "auth/login",
  async (user, thunkAPI) => {
    try {
      const response = await axios.post("api/auth/login", user);
      const data = { data: response.data, status: response.status };
      return data;
    } catch (error) {
      toast.error("Username or Password are incorrect");
      return thunkAPI.rejectWithValue({
        data: error.response.data,
        status: error.response.status,
      });
    }
  }
);

export const signUpUser = createAsyncThunk(
  "auth/signup",
  async (userIpt, thunkAPI) => {
    try {
      const response = await axios.post("api/auth/signup", userIpt);
      const data = { data: response.data, status: response.status };
      return data;
    } catch (error) {
      toast.error("Somthing went wrong, Try again!");
      return thunkAPI.rejectWithValue({
        data: error.response.data,
        status: error.response.status,
      });
    }
  }
);

export const followUserHandler = createAsyncThunk(
  "post/followUserHandler",
  async ({ followUserId, token }, thunkAPI) => {
    try {
      const response = await axios.post(
        `/api/users/follow/${followUserId}`,
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

export const unfollowUser = createAsyncThunk(
  "post/follow",
  async ({ followUserId, token }, thunkAPI) => {
    console.log(followUserId)
    console.log(token)
    try {
      const response = await axios.post(
        `/api/users/unfollow/${followUserId}`,
        {},
        { headers: { authorization: token } }
      );
      console.log(response)
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

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logoutUser: () => {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      return {
        user: null,
        token: null,
      };
    },
  },

  extraReducers: {
    [loginUser.pending]: (state) => {
      state.authStatus = "pending";
    },

    [loginUser.fulfilled]: (state, action) => {
      state.authStatus = "fulfilled";
      state.token = action.payload.data.encodedToken;
      state.user = action.payload.data.foundUser;
    },

    [loginUser.rejected]: (state, action) => {
      state.authStatus = "error";
      state.error = action.payload.data.errors;
    },

    [signUpUser.pending]: (state) => {
      state.authStatus = "pending";
    },

    [signUpUser.fulfilled]: (state, action) => {
      state.authStatus = "fulfilled";
      state.token = action.payload.data.encodedToken;
      state.user = action.payload.data.createdUser;
      toast.success("Successfully Signed Up");
    },

    [signUpUser.rejected]: (state, action) => {
      state.authStatus = "error";
      state.error = action.payload.data.errors;
    },
    [followUserHandler.pending]: (state) => {
      state.status = "pending";
    },
    [followUserHandler.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.user = action.payload.data.user;
    },
    [followUserHandler.rejected]: (state, action) => {
      state.status = "rejected";
      console.error(action.payload.data.errors[0]);
    },
    [unfollowUser.pending]: (state) => {
      state.status = "pending";
    },
    [unfollowUser.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.user = action.payload.data.user;
    },
    [unfollowUser.rejected]: (state, action) => {
      state.status = "rejected";
      console.error(action.payload.data.errors[0]);
    },
  },
});

export const { logoutUser } = authSlice.actions;
export default authSlice.reducer;
