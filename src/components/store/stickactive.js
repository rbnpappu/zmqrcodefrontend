// store/exampleSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    stickactiveValue: false, // Initial value for your store
};

const stickactiveSlice = createSlice({
  name: 'stickactive',
  initialState,
  reducers: {
    setstickactiveValue: (state, action) => {
      state.stickactiveValue = action.payload; // Action to set the value directly
    },
  },
});

// Export the actions so you can use them in your components
export const { setstickactiveValue } = stickactiveSlice.actions;

// Export the reducer to be included in the store
export default stickactiveSlice.reducer;
