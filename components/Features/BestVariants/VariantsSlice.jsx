import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  RealEstates: [],
  loading: true,
  error: null,
};

export const fetchRealEstates = createAsyncThunk(
  "RealEstates/fetchRealEstates",
  async (_, { rejectWithValue }) => {
    try {
    const res = await fetch('https://uk-real-estate-rightmove.p.rapidapi.com/buy/property-for-sale?identifier=REGION%5E1036&sort_by=HighestPrice&search_radius=0.0', {
    next: { revalidate: 60 },

    headers: {
      "Content-Type": "application/json",
      "x-rapidapi-host": "uk-real-estate-rightmove.p.rapidapi.com",
      "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
    },
  });
  const data = await res.json();

  return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
const RealEstatesSlice = createSlice({
  name: "RealEstate",
  initialState: initialState,
  reducers: {},
extraReducers: (builder) => {
  builder
    .addCase(fetchRealEstates.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchRealEstates.fulfilled, (state, action) => {
      state.loading = false;
      state.RealEstates = action.payload?.data || [];
    })
    .addCase(fetchRealEstates.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
},
});

export default RealEstatesSlice.reducer;
