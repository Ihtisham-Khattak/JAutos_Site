import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkMode: JSON.parse(localStorage.getItem("toggle")) || false,
};

const darkSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.darkMode = !state.darkMode;
      localStorage.setItem("toggle", JSON.stringify(state.darkMode))
    },
  },
});

export const { toggleTheme } = darkSlice.actions;
export default darkSlice.reducer;
