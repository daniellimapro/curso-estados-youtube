import { createSlice, configureStore } from "@reduxjs/toolkit";
import { getPhotos } from "./getPhotos";

const photosSlice = createSlice({
  name: "photosSlice",
  initialState: {
    data: [],
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [getPhotos.pending]: (state) => {
      state.loading = true;
    },
    [getPhotos.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
    [getPhotos.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const store = configureStore({
  reducer: photosSlice.reducer,
});
