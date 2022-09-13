import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../pages/authentication/authSlice";
import postCardModalReducer from "../components/postCardModal/postCardModalSlice";
import postsReducer from "../pages/home/postSlice";
import { usersReducer } from "../pages/profile/userSlice";
import editProfileModalReducer from "../pages/profile/profileModalSlice";
import followingModalReducer from "../components/followBar/followModalSlice"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    postCardModal: postCardModalReducer,
    post: postsReducer,
    user: usersReducer,
    profileModal: editProfileModalReducer,
    followingModal :followingModalReducer
  },
});