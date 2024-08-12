import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://66b9e333fa763ff550f9fcff.mockapi.io/";

export const fetchPosts = createAsyncThunk(
  "fetchPosts",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get("posts");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addPostsThunk = createAsyncThunk(
  "addPost",
  async (body, thunkAPI) => {
    try {
      const { data } = await axios.post("/posts", body);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
