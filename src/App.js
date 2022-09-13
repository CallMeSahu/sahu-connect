import React from 'react';
import "./index.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Wrapper,
  Login,
  Signup,
  Bookmark,
  AllPost,
  Profile,
  Feed,
  Error,
  EditProfileModal,
  IndividualUserProfile
} from "./pages";
import { ToastContainer } from "react-toastify";
import { RequireAuth } from "./RequiresAuth";
import "react-toastify/dist/ReactToastify.css";
import { FollowingModal, PostCardM } from "./components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllPost, getUserPost } from "./pages/home/postSlice";
import { getUsers } from "./pages/profile/userSlice";


export default function App(){
  const dispatch = useDispatch();
  const { token, user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (token) {
      dispatch(getAllPost());
      dispatch(getUserPost(user.username));
      dispatch(getUsers());
    }
  }, [token]);

  return (
    <div className="App">
      <ToastContainer
          bodyClassName="toastBody"
          position="top-right"
          autoClose="500"
          limit="1"
          style={{ top: "1.5em", right: "0em" }}
        />
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/"
            element={
              <RequireAuth>
                <Wrapper>
                  <Feed />
                </Wrapper>
              </RequireAuth>
            }
          />
          <Route
            path="/explore"
            element={
              <RequireAuth>
                <Wrapper>
                  <AllPost />
                </Wrapper>
              </RequireAuth>
            }
          />
          <Route path="" />
          <Route
            path="/bookmark"
            element={
              <Wrapper>
                <Bookmark />
              </Wrapper>
            }
          />
          <Route
            path="/profile"
            element={
              <RequireAuth>
                <Wrapper>
                  <Profile />
                </Wrapper>
              </RequireAuth>
            }
          />
          <Route
            path="/profile/:userId"
            element={
              <RequireAuth>
                <Wrapper>
                  <IndividualUserProfile />
                </Wrapper>
              </RequireAuth>
            }
          />
          <Route path="*" element={<Error />} />
        </Routes>

        <PostCardM />
        <EditProfileModal />
        <FollowingModal />
      </Router>
    </div>
  );
}


