import { createAsyncThunk } from "@reduxjs/toolkit";
import { service } from "../service";

export const getPhotos = createAsyncThunk("get/photos", async () => {
  try {
    const photos = await service.get(
      "?per_page=10&?page=1&query=desk?orientation=landscape"
    );
    return photos.data;
  } catch (e) {
    return rejectWithValue(e);
  }
});
