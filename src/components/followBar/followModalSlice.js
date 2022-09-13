import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  followingModal: false,
};

const followingModalSlice = createSlice({
  name: "followingModal",
  initialState,
  reducers: {
    openFollowingModal: (state) => {
      state.followingModal = true;
    },
    closeFollowingModal: (state) => {
      state.followingModal = false;
    },
  },
});

export const { openFollowingModal, closeFollowingModal } =
followingModalSlice.actions;
export default followingModalSlice.reducer;
