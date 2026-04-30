import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    RealEstates: [],
    loading: false,
    error: null,
}



export const fetchRealEstates = createAsyncThunk(
  "RealEstates/fetchRealEstates",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get(
        "https://uk-real-estate-rightmove.p.rapidapi.com/buy/property-for-sale?",
        {
          params: {
            identifier: "REGION^1036",
            sort_by: "HighestPrice",
            search_radius: 0.0,
          },

          headers: {
            "Content-Type": "application/json",
            "x-rapidapi-host": "uk-real-estate-rightmove.p.rapidapi.com",
            "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
          },
        },
      );
      return res.data;
      
    } catch (error) {
     return rejectWithValue(
  error.response?.data || error.message || "Unknown error"
);
    }
  },
);


const RealEstatesSlice = createSlice({
    name : 'RealEstate',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder)=> {
 builder.addCase(fetchRealEstates.pending, (state)=>{
            state.error = null,
            state.loading = true   
        })
        builder.addCase(fetchRealEstates.fulfilled, (state, action)=>{
            state.RealEstates = action.payload?.data || [];
            state.loading = false
        }),
        builder.addCase(fetchRealEstates.rejected, (state, action)=>{
            state.error = action.payload,
            state.loading = false
        })
    }
})

export default  RealEstatesSlice.reducer
