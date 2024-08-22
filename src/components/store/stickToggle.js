import { configureStore } from "@reduxjs/toolkit";
import stickactiveReducer from './stickactive'; // Import the correct reducer

const store = configureStore({
  reducer: {
    stickactive: stickactiveReducer, // Corrected the typo here
  },
});

export default store;
