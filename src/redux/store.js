import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/combinedReducer";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
});

export default store;