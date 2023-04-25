import { createSlice } from "@reduxjs/toolkit";

export const Slice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    renderedPosts: [],
    searchR: "",
  },
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    setRenderedPosts: (state, action) => {
      state.renderedPosts = action.payload;
    },
    setSearchR: (state, action) => {
        state.searchR = action.payload;
      },
  },
});

export const { setPosts, setRenderedPosts, setSearchR} = Slice.actions;

export default Slice.reducer;