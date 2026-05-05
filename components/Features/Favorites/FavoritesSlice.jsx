import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  favorites: [],
};

const FavoritesSlice = createSlice({
  name: "Favorites",
  initialState: initialState,
  reducers: {
    addToFavorites(state, action) {
      const double = state.favorites.find(
        (favorite) => favorite.id === action.payload.id,
      );
      if (!double) {
        state.favorites.push(action.payload);
      }
    },
    deleteFromFavorites(state, action) {
      state.favorites = state.favorites.filter(
        (favorite) => favorite.id != action.payload,
      );
    },
  },
});

export const { addToFavorites, deleteFromFavorites } = FavoritesSlice.actions;
export default FavoritesSlice.reducer;
