import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { addPostsThunk, fetchPosts, deleteTodoThunk } from "./operations";

const initialState = {
  posts: [],
};
const slice = createSlice({
  name: "posts",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
      })
      .addCase(addPostsThunk.fulfilled, (state, action) => {
        state.posts.push(action.payload);
      })
      .addCase(deleteTodoThunk.fulfilled, (state, action) => {
        state.posts = state.posts.filter((post) => post.id !== action.payload);
      })
      .addMatcher(
        isAnyOf(
          addPostsThunk.pending,
          fetchPosts.pending,
          deleteTodoThunk.pending
        ),
        (state) => {
          state.isLoading = true;
          state.isError = false;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchPosts.rejected,
          addPostsThunk.rejected,
          deleteTodoThunk.rejected
        ),
        (state) => {
          state.isLoading = false;
          state.iserror = true;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchPosts.fulfilled,
          addPostsThunk.fulfilled,
          deleteTodoThunk.fulfilled
        ),
        (state) => {
          state.isLoading = false;
        }
      );
  },
});

export const postReducer = slice.reducer;
