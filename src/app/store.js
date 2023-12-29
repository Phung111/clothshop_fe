import { configureStore } from "@reduxjs/toolkit";

import baseSlice from "feature/baseSlice";

const store = configureStore({
  reducer: {
    baseSlice: baseSlice,
  },
});

export default store;
