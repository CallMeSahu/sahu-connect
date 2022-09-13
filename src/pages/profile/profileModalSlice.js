import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  editProfileModal: false,
  loader: false
};

const editProfileModalSlice = createSlice({
  name: "profileModal",
  initialState,
  reducers: {
    openEditProfileModal: (state) => {
      state.editProfileModal = true;
    },
    closeEditProfileModal: (state) => {
      state.editProfileModal = false;
    },
    openLoader: (state) => {
      state.loader = true;
    },
    closeLoader: (state) => {
      state.loader = false;
    }
  },
});

export const { openEditProfileModal, closeEditProfileModal, openLoader, closeLoader } =
  editProfileModalSlice.actions;
export default editProfileModalSlice.reducer;
