import { createSlice } from "@reduxjs/toolkit";

const settingsSlice = createSlice({
  name: "settings",
  initialState: {
    sendModal: false,
  },
  reducers: {
    toggleSendModal: (state, action) => {
      state.sendModal = !state.sendModal;
    },
  },
});

export const { toggleSendModal } = settingsSlice.actions;

export default settingsSlice.reducer;
