import { configureStore } from "@reduxjs/toolkit";
import BestVariants from "../components/Features/BestVariants/VariantsSlice";

export const store = configureStore({
  reducer: {
    RealEstates: BestVariants,
  },
});
