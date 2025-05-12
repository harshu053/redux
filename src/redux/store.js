import { configureStore } from "@reduxjs/toolkit";
import counterslice from "./counterslice";

export const store = configureStore({
  reducer: {
    counter: counterslice,
  },
});
