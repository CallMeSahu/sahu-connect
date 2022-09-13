import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  postCardModal: false,
  postCardContent: {},
};

const postCardModalSlice = createSlice({
  name: "postCardModal",
  initialState,
  reducers: {
    openPostCardModal: (state, action) => {
      state.postCardModal = true;
      state.postCardContent = action?.payload;
    },
    closePostCardModal: (state) => {
      state.postCardModal = false;
      state.postCardContent = {};
    },
  },
});

export const { openPostCardModal, closePostCardModal } =
  postCardModalSlice.actions;
export default postCardModalSlice.reducer;
