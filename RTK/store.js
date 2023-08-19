import { configureStore } from "@reduxjs/toolkit";
import colorReducer from "./colorSlice";

export default configureStore({
  reducer: {
    color: colorReducer,
  },
});
