import { configureStore, createSlice } from "@reduxjs/toolkit";

// Slice - содержит состояние приложения и функцию toggleTheme(), меняющую текущую тему на противоположную.
const themeSlice = createSlice({
  name: "theme",
  initialState: { theme: "light" },
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

// Создаем хранилище Redux и передаем в него редьюсер themeSlice.reducer.
const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
  },
});

export default store;
