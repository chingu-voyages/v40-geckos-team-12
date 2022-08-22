import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLightTheme: true,
  isSidebarOpen: true,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.isLightTheme = !state.isLightTheme;
    },
    toggleisSidebarOpen: (state,{payload})=>{
     return {...state, isSidebarOpen: payload}
    }
  },
});

export const { toggleTheme,toggleisSidebarOpen } = themeSlice.actions;

export const selectIsLightTheme = (state) => state.theme.isLightTheme;
export const selectIsSidebarOpen = (state) => state.theme.isSidebarOpen;

export default themeSlice.reducer;
