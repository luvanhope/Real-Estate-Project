import { configureStore } from "@reduxjs/toolkit";
import BestVariants from "../components/Features/BestVariants/VariantsSlice";
import Favorites from "../components/Features/Favorites/FavoritesSlice";

export const store = configureStore({
  reducer: {
    RealEstates: BestVariants,
    FavoritesEstate: Favorites,
  },
});
